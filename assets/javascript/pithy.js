// Into each life a little humor must fall
// Pithy responses to validation failures

const typeError = [
    "You've got to select at least one character type. It can be more than that. It can be three. Or four. Or two. But not zero, never zero. Try again.",
    "I'm sorry, Dave, I'm afraid I can't do that. You have to select at least one character type. Try again. 🤖",
    "That's all icing, and no cake. No, wait, there's not any icing either. You'll have to pick at least one kind of character to include. Try again.",
    "I'm a computer, not a magician. I need at least one set of characters in order to make up your password. Try again.",
    "Zero calories? Good! Zero losses? Great! Zero regrets? I'm jealous! But zero character types? Nope. Nope nope nope. Try again.",
    "What do my mom's lasagna and a new password with no character types have in common? I can't make either of them. Please choose at least one character type. Try again.",
    "I don't think you want a password of [nothing]. Please choose at least one character type. Try again.",
    "The concept of the zero is one of the great breakthroughs in the history of mathematics. Unfortunately, choosing zero character types just breaks the password process. Please select at least one. Try again.",
    "'My name is Password Generator. You killed my chances of fathering a new password for you. Prepare to try again.' Only this time click OK for at least one of the character types.",
    "There once was a man from Nantucket, who put no character types in the bucket. The server was thwarted and the process aborted, so it said to the user go...try again and this time choose at least one of the character types.",
    "Of all the Web pages, in all the sites, in all the Internet, you surf into mine. And without clicking OK on any of the character types. So try again, and this time choose at least one.",
    "So what do we do now? You won't let me use lower-case letters or upper-case letters or numbers or special characters. I guess we just sit here and stare at each other. Or you could try again, and click 'OK' on at least one of them."
]

const lengthError = [
    "CUT! Ok, let's try that again, only this time between 8 and 128 characters. Aaaaaand...ACTION! 🎬",
    "Question: What should be at least 8 but never greater than 128? Answer: The length of your new password. Sorry, they can't all be dad jokes. Try again.",
    "Your password can't be that length. It can be 8 characters. Or 9. Or 10. Or 11. Or 12. Or--you get the picture. All the way up to 128. Somewhere in there. Try again.",
    "Did you know that in ancient Rome, everyone's password was less than 8 characters long, or more than 128 characters long? And Rome fell. I'm just sayin'. Keep it between 8 and 128. Try again.",
    "No, no, no, no, no, no, no. Your password must have more characters than the number of no's I put in the prevdious sentence. And no more than 128. I'm not typing all of those, my fingers are tired from wagging. Try again.",
    "Aladdin just had to remember 'Open, sesame!' That was just two words. That's not fair. Because you've got to use at least 8 characters. But you can't use more than 128, so that's the most you'll have to memorize! Try again.",
    "Do you want to know a secret? I can only create passwords between 8 and 128 characters long. It's all very hush-hush, let's keep this between us, OK? Just choose a length between 8 and 128 this time, and mum's the word. Try again.",
    "The long and the short of it is you wanted a password that was too long or too short. I only generate ones that are from 8 to 128 characters long. Try again.",
    "In Xanadu did Kubla Khan a stately pleasure dome decree...and he insisted that you use a password to get in, only it had to be from 8 to 128 characters long. Try again.",
    "[Insert pithy error message here]. Please try again, with a requested length from 8 to 128 characters.",
    "Who's afraid of Virginia Woolf? I'm not. But I am afraid that she insists you request a password length from 8 to 128 characters. Try again.",
    "If you read the software user agreement, you'll find in section 4, paragraph 15, subparagraph ix, clause D, that your password request has to be between 8 and 128 characters long. Try again."
]

const numberError = [
    "Come on, I'm trying to compromise by letting you operate in base ten. Meet me halfway, use an actual number (between 8 and 128).",
    "You know that's not really a number. I know you know that's not really a number. You know I know you know that's not really a number. Try again, this time with an actual number espressed in numerical digits, between 8 and 128.",
    "You must have between eight and one-hundred-twenty-eight characters. I typed that without using any numbers, but you don't have that option. Please use an actual number expressed in numerical digits, between 8 and 128.",
    "You must be really fun at parties. Give me an actual number expressed in numerical digits between 8 and 128, smartypants.",
    "Gimme an I! Gimme an N! Gimme a T! Gimme an E! Gimme a G-E-R! What's that spell? Integer! Integer! Goooooooooo Integer! I love integers. You should try one, expressed in numerical digits, between 8 and 128. Try again.",
    "The quick brown fox jumped over the lazy dogs. Nothing in that sentence should be used when telling me the length of your new password. Just numerals. Just the digits 0 through 9 in some combination. Between 8 and 128. Try again.",
    "You know, I have trouble understanding why anyone would need letters in conversation at all. All I need are 0 and 1. Let's keep it to just numbers representing a value between 8 and 128, OK? Try again.",
    "I'm a computer, so I'm not smart. I can only do what I've been told to do. And I've been told to only accept numbers expressed as digits for the length of the password, from 8 to 128. And to occasionally be sarcastic. Please try again.",
    "All denominations are welcome. Denominations, that is, that are expressed using numerical digits and not any other characters. And not really all of them: just from 8 to 128. Try again.",
    "Have I offended you in some way? No? I'll keep trying, then. Please use only numerical digits to request a password length of 8 to 128 characters. Try again.",
    "So this is what it's come to. Using non-numerical digits to request a password length from 8 to 128 characters. Please don't do that. Try again.",
    "I'm going to ask you to try again, using only numerical digits to request a password length from 8 to 128 characters. This hurts me more than it hurts you."
]
