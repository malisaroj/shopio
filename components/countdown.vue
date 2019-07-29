<template>
    <div class="countdown">
        <div class="block hide">
            <p class="digit">{{ days.toString().length > 1 ? days : days == 0 ? '00' : '0' + days }}</p>
        </div>
        <div class="block">
            <p class="digit">{{ hours.toString().length > 1 ? hours : hours == 0 ? '00' : '0' + hours }}:</p>
        </div>
        <div class="block">
            <p class="digit">{{ minutes.toString().length > 1 ? minutes : minutes == 0 ? '00' : '0' + minutes }}:</p>
        </div>
        <div class="block">
            <p class="digit">{{ seconds.toString().length > 1 ? seconds : seconds == 0 ? '00' : '0' + seconds }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            window.setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
            }, 1000);
        },
        props: {
            date: {
                type: String
            }
        },
        data() {
            return {
                now: Math.trunc((new Date()).getTime() / 1000)
            }
        },
        computed: {
            dateInMilliseconds() {
                return Math.trunc(Date.parse(this.date) / 1000)
            },
            seconds() {
                return (this.dateInMilliseconds - this.now) % 60;
            },
            minutes() {
                return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
            },
            hours() {
                return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
            },
            days() {
                return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
            }
        }
    }
</script>
<style>
    .hide {
        display: none !important;
    }

    .block {
        display: flex;
        flex-direction: column;
        margin: 2px;
    }

    .countdown {
        display: flex;
    }

    .text {
        color: #1abc9c;
        font-size: 20px;
        font-weight: 400;
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: center;
        display: none;
    }

    .digit {
        color: #ecf0f1;
        font-size: 30px;
        font-weight: 300;
        margin: 0px;
        text-align: center;
    }
</style>