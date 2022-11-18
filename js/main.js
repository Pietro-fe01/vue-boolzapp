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
                            clicked: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            clicked: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            clicked: false
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
                            clicked: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            clicked: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            clicked: false
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
                            clicked: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            clicked: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            clicked: false
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
                            clicked: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            clicked: false
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
                            clicked: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            clicked: false
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
                            clicked: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            clicked: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            clicked: false
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
                            clicked: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            clicked: false
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
                            clicked: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            clicked: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            clicked: false
                        }
                    ],
                }
            ],
            currentContact: 0,
            sendMessage: '',
            newMessage: class {
                constructor(date, message, status, clicked){
                    this.date = date;
                    this.message = message;
                    this.status = status;
                    this.clicked = clicked;
                }
            },
            filterName: '',
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
        // Questa funzione serve per creare un nuovo messaggio 'sent' in base al testo inserito in input
        sendNewMessage: function(){
            if(this.sendMessage !== ''){
                const createNewMessage = new this.newMessage(
                    new Date().toLocaleString(),
                    this.sendMessage,
                    'sent',
                    false
                );
                this.contacts[this.currentContact].messages.push(createNewMessage);
                this.sendMessage = '';

                this.receiveMessage();
            }
        },
        //Questa funzione invia un messaggio all'utente dopo 1 secondo dall'invio del suo messaggio 'sent'
        receiveMessage: function(){
            setTimeout(() =>{
                const createNewReceiveMessage = new this.newMessage(
                    new Date().toLocaleString(), 
                    'Okay',
                    'received',
                    false
                );
                this.contacts[this.currentContact].messages.push(createNewReceiveMessage);
            }, 1000)
        },
        isClicked: function(message){
            if(message.clicked === false){
                return message.clicked = true;
            } else {
                return message.clicked = false;
            }
        },
        openDropDown: function(message){
            if(message.clicked){
                return message.clicked = false;
            }
        },
        deleteMessage: function(i){
            this.contacts[this.currentContact].messages.splice(i, 1)
        }
    }
}).mount('#app')