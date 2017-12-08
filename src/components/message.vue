<template>
    <div class="message-box">
        <div class="header">
            <div class="header-block-left">
            <i class="fa fa-comment" aria-hidden="true"></i>
            </div>
            <div class="header-block-middle">
            <div>{{message.to}}</div>
            </div>
            <div class="header-block-right">
                <i class="fa fa-link" aria-hidden="true"></i>
                <i class="fa fa-window-close" aria-hidden="true"></i>
            </div>
        </div>
        <div class="body">
            <div class="message">
            <div class="message-icon">
                <div class="fake-icon"></div> 
            </div>
            <div class="message-details">
                <div class="message-details-header">
                <span class="message-details-header-name">
                    {{message.from}}
                </span>
                <span class="message-details-header-timestamp">
                    {{message.at}} 
                </span> 
                </div>
                <div class="message-details-body">
                    {{message.text}}
                </div>
            </div>
            </div>   
        </div>
        <form class="footer">
            <input class="footer-response" type="textarea" name="response" placeholder="Ecrivez un message...">
        </form>
    </div>
</template>

<script>
import messages from '../../mockups/messages.json'

export default {
  name: 'message',
  data () {
    return {
      message: messages[0]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.message-box {
  margin-top: 30px;
  box-shadow : 3px 2px #aaa;
  font-family: 'Open Sans Condensed', sans-serif;
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: #0084FF;
  border-width: 0;
  border-radius: 0 0 40px 0;
  
    .header {
        height: 35px;
        border-style: inherit;
        border-color: inherit;
        border-radius: 50px 0 0 0;
        border-width: 2px;
        background-color: #0084FF;
     
     display: flex;
     align-items: center;
     color: #fff;
     .header-block-left {
       i.fa {
         margin-left: 20px;
         font-size :25px;
         color: inherit;
       }    
     }
     .header-block-middle {
       flex: 1;
       margin-left: 15px;
       font-size :18px;
       color: inherit;
     }
     .header-block-right {
       display: flex;
       margin-right: 8px;
       i.fa {
         margin:8px;
         font-size :25px;
         color: inherit;
       }  
     }
  }
  .body {
     border-style: none solid;
     border-color: inherit;
     border-width: 2px;

     background : #fff;
     flex: 1;
     border-width: 2px;
     padding-bottom: 20px;
     
     display: flex;
     flex-direction: column;
     .message {
       flex: 1;
       display: flex;
       margin: 0;
       padding:10px;
       &:nth-child(2n+2){
         background-color: #f5faff
       }
       
       .fa-quote-left, .fa-quote-right {
         color: #0084FF;
         opacity: 0.8;
       }
       .message-icon {
         .fake-icon {
           width: 50px;
           height: 50px;
           background-color : #FFF2CC;
           border: 2px solid #D6B656;
           border-radius: 30px;
         }
       }
       .message-details {
         flex: 1;
         margin-left: 10px;
         display: flex;
         flex-direction: column;
         .message-details-header {
           .message-details-header-name {
             font-weight: bold;
           }
           .message-details-header-timestamp {
             font-style: italic;
             font-size: 12px;
             color: #777;
           }
         }
         .message-details-body {
           flex: 1;
           margin-top: 10px;
           color: #333;
         }
       }
     }
  }
  .footer {
     height: 40px;
     border-style: inherit;
     border-color: inherit;
     border-width: 2px;
     border-top-width: 1px;
     border-top-color: rgba(0, 0, 0, .10);
     border-radius: 0 0 40px 0;
     background-color: #fff;
     
     display: flex;
     .footer-response {
       flex: 1;
       border-style: none;
       padding-left: 70px;
       padding-right: 20px;
       border-radius: inherit;
       &::placeholder {
         color : #90949c;
         font-size :15px;
       }
     }
  }
}
</style>
