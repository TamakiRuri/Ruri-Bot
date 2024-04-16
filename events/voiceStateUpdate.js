const {ChannelType, PermissionFlagsBits} = require('discord.js');

module.exports={
    name: 'voiceStateUpdate',
    timeMessage(dTime, dAction, stat){
        let Lchannel = global.channelMap.get(stat.guild.id);
        if (!Lchannel){
            Lchannel = stat.guild.channels.cache.find(ch => ch.type === ChannelType.GuildText && ch.permissionsFor(stat.guild.members.me).has(PermissionFlagsBits.SendMessages)).id;
        }
        if (dAction === 'start'){
            const Msg ={
                title: 'ボイスチャットが始まりました',
                fields: [
                    {
                        name:'チャンネル',
                        value: stat.channel.toString(),
                    },
                    {
                        name:'ユーザー',
                        value: stat.member.displayName,
                    },
                    {
                        name: 'いまの時間',
                        value: dTime.toTimeString(),
                    }
                ]
            }
            stat.client.channels.cache.get(Lchannel).send({embeds:[Msg]});
        }
        if (dAction === 'end'){
            let timeS = parseInt((dTime/1000)%60);
            let timeMin = parseInt((dTime/60000)%60);
            let timeHr = parseInt((dTime/3600000)%60);
            let curTimeMsg = timeHr + ' hours ' + timeMin + ' mins ' + timeS + ' s\n';
            const Msg ={
                title: 'ボイスチャットが終わりました',
                fields: [
                    {
                        name:'チャンネル',
                        value: stat.channel.toString(),
                    },
                    {
                        name: '経過時間',
                        value: curTimeMsg,
                    }
                ]
            }
            stat.client.channels.cache.get(Lchannel).send({embeds:[Msg]});
        }
    },
    countStart(startChannel){
        console.log('Someone in ' + startChannel.guild.toString() + ' started a voice chat');
        const vcStatus = {
            channel: startChannel.channelId,
            startTime: new Date(),
        }
        global.vcTimeMap.set(startChannel.channelId, vcStatus);
        this.timeMessage(vcStatus.startTime, 'start', startChannel);
    },
    countEnd(endChannel){
        console.log('The voice chat in ' + endChannel.guild.toString() + ' ended');
        let endTime = new Date();
        if (global.vcTimeMap.get(endChannel.channelId)=== undefined)return;
        let timeDiff = endTime - global.vcTimeMap.get(endChannel.channelId).startTime;
        this.timeMessage(timeDiff, 'end', endChannel);
    },
    async execute(endChannel, startChannel){
        if(!startChannel && !endChannel){
            console.log('Voice Channels Unreachable');
            return;
        }
        if (endChannel.channel!=null && startChannel.channel==null){
            //console.log('Exited');
            if(endChannel.channel.members.size==0){
                this.countEnd(endChannel);
                return;
            }
            return;
        }
        if (startChannel.channel!=null && endChannel.channel==null){
            //console.log('Joined');
            if(startChannel.channel.members.size==1){
                this.countStart(startChannel);
                return;
            }
            return;
        }
        if (startChannel.channel!=null && endChannel.channel!=null){
            //console.log('Moved');
            if(endChannel.channel.members.size==0){
                this.countEnd(endChannel);
            }
            if(startChannel.channel.members.size==1){
                this.countStart(startChannel);
            }
            return;
        }
        console.log('No action taken.');
    }
}