"use strict";

const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            clicked: false,
                            isPref: false,
                            reactionsOpen: false,
                            reactEmojiField: ''
                        }
                    ],
                }
            ],
            currentContact: 0,
            sendMessage: '',
            newMessage: class {
                constructor(date, message, status, clicked, isPref, reactionsOpen){
                    this.date = date;
                    this.message = message;
                    this.status = status;
                    this.clicked = clicked;
                    this.isPref = isPref;
                    this.reactionsOpen = reactionsOpen;
                }
            },
            filterName: '',
            picker: new EmojiButton(),
            reactEmojiList: ['x', '👍', '❤️', '😂', '😯', '😢', '🙏'],
        }
    },
    methods: {
        // Al click di un contatto viene mostrata la relativa chat sulla destra
        openChat: function(i){
            this.currentContact = i;
        },
        // Funzione che filtra i contatti in base alle lettere contenute nel nome salvato
        filteringListContacts: function(){
            if (this.filterName === ''){
                for(let i=0; i<this.contacts.length; i++){
                    this.contacts[i].visible = true;
                }
            } else {
                for(let i=0; i<this.contacts.length; i++){
                    if(!this.contacts[i].name.toLowerCase().includes(this.filterName.toLowerCase())){
                        this.contacts[i].visible = false;   
                    }
                }
            }
        },
        // Funzione che riaggiorna i contatti salvati con quel nome quando viene cancellata una lettera
        cancLetter: function(){
            if(this.filterName !== ''){
                for(let i=0; i<this.contacts.length; i++){
                    if(this.contacts[i].name.toLowerCase().includes(this.filterName.toLowerCase())){
                        this.contacts[i].visible = true;
                    }
                }
            }
        },
        // Funzione che ritorna l'ultimo accesso del contatto in base all'ultimo messaggio inviato
        lastAccess: function(){
            for(let i = this.contacts[this.currentContact].messages.length - 1; i>=0; i-- ){
                if(this.contacts[this.currentContact].messages[i].status === 'received'){
                    return this.contacts[this.currentContact].messages[i].date.substring(11,16);
                }
            }
        },
        // Questa funzione serve per creare un nuovo messaggio 'sent' in base al testo inserito in input
        sendNewMessage: function(){
            if(this.sendMessage !== ''){
                const createNewMessage = new this.newMessage(
                    moment(new Date).format(),
                    this.sendMessage,
                    'sent',
                    false,
                    false,
                    false,
                    ''
                );
                this.contacts[this.currentContact].messages.push(createNewMessage);
                this.sendMessage = '';

                this.receiveMessage(this.currentContact);
            }
        },
        //Questa funzione invia un messaggio all'utente dopo 1 secondo dall'invio del suo messaggio 'sent'
        // come risposta viene data una casuale da API Chuck Norris
        receiveMessage: function(currentContact){
            setTimeout(() =>{
                axios.get('https://api.chucknorris.io/jokes/random')
                .then((response) => {
                    const createNewReceiveMessage = new this.newMessage(
                        moment(new Date).format(), 
                        response.data.value,
                        'received',
                        false,
                        false,
                        false,
                        ''
                    );
                    this.contacts[currentContact].messages.push(createNewReceiveMessage);
                });
            }, 1000)
        },
        // Al click della freccia di un messaggio viene mostrato il dropdown
        isClicked: function(message){
            if(message.clicked === false){
                return message.clicked = true;
            } else {
                return message.clicked = false;
            }
        },
        // Se il dropdown è stato aperto e si esce dal box del messaggio il menù si chiude
        closeDropDown: function(message){
            if(message.clicked){
                return message.clicked = false;
            }
        },
        // Funzione per eliminare il messaggio aperto tramite dropdown
        deleteMessage: function(i){
            this.contacts[this.currentContact].messages.splice(i, 1)
        },
        // Funzione che formatta le date dei messaggi mostrando hh:mm
        formatMessageData: function(message){
            return message.date.substring(11,16);
        },
        // Al click dell'icona smile si apre il menù delle emoji
        emojiField: function(){
            this.picker.togglePicker()
        },
        // Funzione che chiede l'autorizzazione per l'accesso al microfono
        getLocalStream: function() {
            navigator.mediaDevices
            .getUserMedia({ video: false, audio: true })
            .then((stream) => {
                window.localStream = stream;
                window.localAudio.srcObject = stream;
                window.localAudio.autoplay = true;
            })
            .catch((err) => {
                console.error(`you got an error: ${err}`);
            });
        },
        // Funzione che scrolla automaticamenta verso il basso all'inserimento di messaggi
        scrollToBottom: function(){
            const chatOutputField = document.querySelector(".field-output-message");
            let scrollHeight = chatOutputField.scrollHeight;
            chatOutputField.scrollTop = scrollHeight;
        },
        // Funzione che copia il contenuto del messaggio selezionato
        copyText: function(message) {
            const copiedButton = document.getElementById("copy-button");
            copiedButton.innerHTML = `<i class="fa-solid fa-circle-check"></i> Messaggio copiato!`
            setTimeout(function(){
                copiedButton.innerHTML = `<i class="fa-solid fa-copy"></i> Copia`
            }, 1500)
            return navigator.clipboard.writeText(message.message);
        },
        // Al click del tasto 'preferiti' comparirà una stella sul messaggio
        setFavouriteMessage: function(message){
            if(message.isPref === false){
                message.isPref = true;
            } else {
                message.isPref = false;
            }
            message.clicked = false;
        },
        // Al click del pulsante emoji si aprono le reazioni del messaggio cliccato
        openReactions: function(message){
            if(message.reactionsOpen === true){
                message.reactionsOpen = false;
            } else {
                message.reactionsOpen = true;
            }
            message.clicked = false;
        },
        // In base alla reazione cliccata la stampa sul messaggio
        selectReaction: function(message, emojiClicked){
            if(emojiClicked === 'x'){
                message.reactEmojiField = '';
            } else {
                message.reactEmojiField = emojiClicked
            }
            message.reactionsOpen = false; 
        }
    },
    created(){
        moment.locale('it');
    },
    mounted(){
        // Questa funzione copia la emoji cliccata nella barra di inserimento dei messaggi
        this.picker.on('emoji', emoji => {
            this.sendMessage = this.sendMessage + emoji;
            //Permette di immettere tante faccine fino al click al di fuori del box emoji
            this.$refs.search.$el.focus();
        });
    },
    // Richiama la funzione che scrolla verso il basso all'update
    updated(){
        this.scrollToBottom();
    }
}).mount('#app')

