var username = "";
		function send_message(message){
			var prevState = $(".container").html();
			if (prevState.length > 5) {
				prevState = prevState + "<br>"
			}
			$(".container").html(prevState + "<span class='current_msg'>" + "<span class='bot'>Chatbot: </span>" + message + "</span>");
				$(".current_msg").hide();
				$(".current_msg").delay(600).fadeIn();
				$(".current_msg").removeClass("current_msg");
		}
		function get_username() {
			send_message("Hello, What is your name?")
		}
		function display_username(message){
			if (username.length < 5) {
				username = message;
				send_message("Nice to meet you " + username + ", how may I help you??");
			}
			if (message.indexOf(" ")>=0) {
				send_message("Please free free to contact us on 0725830820");
			}
		}
		$(function() {
			get_username();
			$(".textbox").keypress(function(event){
				if (event.which == 13) {
					if ($("#enter").prop("checked")) {
						$(".send").click();
						event.preventDefault();
					}
				}
			});
			$(".send").click(function(){
				var username = "<span class = 'username'>You: </span>";
				var newMessage = $(".textbox").val();
				$(".textbox").val("");
				var prevState = $(".container").html();
				if (prevState.length > 5) {
					prevState = prevState + "<br>"
				}
				$(".container").html(prevState + username + newMessage);
				$(".container").scrollTop($(".container").prop("scrollHeight"));
				display_username(newMessage);
			});
		});