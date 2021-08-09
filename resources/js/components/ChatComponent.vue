<template>
    <div class="chat">
        <div class="row">
            <table class="table m-auto offset-2 col-8">
                <thead>
                    <tr>
                        <th class="text-white">送信日</th>
                        <th class="text-white">内容</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="m in reverseMessages" v-bind:key="m.id">
                        <th class="text-white">{{m.created_at | dateFormat}}</th>
                        <th class="text-white" v-text="m.body"></th>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <div class="offset-4 col-4">
                <textarea
                    class="form-control"
                    v-model="message"
                    @keypress.prevent.enter.exact="enable_submit"
                    @keyup.prevent.enter.exact="submit">
                </textarea>
                <div class="text-right">
                    <button class="btn btn-primary" type="button" @click="send()">送信</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            messages: [],
            can_submit_search: false,
        }
    },
    methods: {
        // Ajaxでメッセージを送る。
        send() {
            const url = 'api/chat';
            const params = { message: this.message };
            axios.post(url, params)
                .then((response) => {
                    this.message = '';
                });
        },
        // メッセージを取得する。
        getMessages() {
            const url = 'api/chat';
            axios.get(url)
                .then((response) => {
                    this.messages = response.data;
                });
        },
        // laravelのchannelと接続する。
        connectChannel() {
            Echo.channel('wankochat_database_chat')
                .listen('MessageReceived', (e) => {
                    this.getMessages();
            });
        },
        // 日本語入力の確定エンターも考慮してエンターボタンでメッセージを送信する。
        enable_submit() {
            this.can_submit_search = true;
        },
        submit() {
            if (!this.can_submit_search || !this.message) return;
            this.send();
            this.can_submit_search = false;
        },
    },
    // ページ遷移の際にメッセージの取得とチャンネルへの接続を行う。
    mounted() {
        this.getMessages();
        this.connectChannel();
    },
    filters: {
        // 時間の表示をフォーマットする。
        dateFormat: function (value){
            if(value != '') {
                return moment(value).local().format('YYYY/MM/DD/HH:mm');
            }
        },
    },
    computed: {
        // 取得したメッセージの順番を逆にして、チャット風にする。
        reverseMessages() {
            return this.messages.slice().reverse();
        },
    },
  }
</script>

<style>
    .table {
        background-color: rgb(255, 208, 0, 0.5);
    }
</style>
