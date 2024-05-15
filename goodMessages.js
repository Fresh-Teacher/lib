var goodMessages = [
    "Not bad, " + playerName + ", not bad at all! 😎 Keep practicing, and you'll improve in no time!",
    "You're doing great, " + playerName + "! You got " + score + " out of 10 correct. 🌟 Keep pushing yourself, and you'll ace it next time! 💪",
    "Lookin' good, " + playerName + "! You got " + score + " out of 10 correct. 😄 Keep up the good work!",
    "Hey, " + playerName + ", you're makin' moves! 🚀 You got " + score + " out of 10 correct. Keep it up!",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. 🎉 You're on the right track!",
    "You're killin' it, " + playerName + "! You got " + score + " out of 10 correct. 🔥 Keep crushin' those tough problems!",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. 💫 You're doin' just fine!",
    "Nice try, " + playerName + "! You got " + score + " out of 10 correct. 🙌 Every question is a step forward!",
    "You're gettin' there, " + playerName + "! You got " + score + " out of 10 correct. 🌈 Keep practicin' those so called problems!",
    "Good job, " + playerName + "! You got " + score + " out of 10 correct. 🎈 Keep workin' hard!",
    "Hey hey, " + playerName + "! You got " + score + " out of 10 correct. 🎈 Keep practicin' those genius skills!",
    "You're gettin' better, " + playerName + "! You got " + score + " out of 10 correct. 🌟 Keep it up!",
    "You're on fire, " + playerName + "! You got " + score + " out of 10 correct. 🔥 Keep pushin' yourself!",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. 🚀 You're doin' awesome!",
    "You're doin' fantastic, " + playerName + "! You got " + score + " out of 10 correct. 🎉 Keep it goin'!",
    "You're doin' great, " + playerName + "! You got " + score + " out of 10 correct. 🌟 Keep up the good work!",
    "You're makin' progress, " + playerName + "! You got " + score + " out of 10 correct. 🚀 Keep goin'!",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. 🎈 You're makin' strides!",
    "You're gettin' better, " + playerName + "! You got " + score + " out of 10 correct. 💫 Keep it up!",
    "Look at you go, " + playerName + "! You got " + score + " out of 10 correct. You're soaring high! 🦅",
    "Whoa, " + playerName + "! You got " + score + " out of 10 correct. You're making waves! 🌊",
    "High five, " + playerName + "! You got " + score + " out of 10 correct. You're on a roll! 🎲",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. Keep shining! ✨",
    "Hey, " + playerName + ", you're killin' it! " + score + " out of 10. You're on fire! 🔥",
    "You're doing great, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 👍",
    "Well done, " + playerName + "! You got " + score + " out of 10 correct. You're on the right track! 🚂",
    "You're smashing it, " + playerName + "! You got " + score + " out of 10 correct. Keep the momentum! 💥",
    "Great job, " + playerName + "! You got " + score + " out of 10 correct. You're on a winning streak! 🏆",
    "Keep up the good work, " + playerName + "! You got " + score + " out of 10 correct. You're making progress! 📈",
    "Awesome job, " + playerName + "! You got " + score + " out of 10 correct. You're on the rise! 🚀",
    "Fantastic work, " + playerName + "! You got " + score + " out of 10 correct. You're on fire! 🔥",
    "You're cruising, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 🚗",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. You're unstoppable! 🌟",
    "You're doing brilliantly, " + playerName + "! You got " + score + " out of 10 correct. Keep up the good work! 👏",
    "Keep going strong, " + playerName + "! You got " + score + " out of 10 correct. You're on a roll! 🎉",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. You're on the right path! 🛤️",
    "You're on a winning streak, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 💪",
    "Impressive work, " + playerName + "! You got " + score + " out of 10 correct. You're on a roll! 🌊",
    "Hey, " + playerName + ", you're doing great! " + score + " out of 10. Keep it up! 🌟",
    "Great job, " + playerName + "! You got " + score + " out of 10 correct. You're making progress! 📈",
    "Nice work, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 💪",
    "You're on a roll, " + playerName + "! You got " + score + " out of 10 correct. Keep going! 🎲",
    "Well done, " + playerName + "! You got " + score + " out of 10 correct. You're doing great! 👏",
    "Keep up the good work, " + playerName + "! You got " + score + " out of 10 correct. You're doing awesome! 🌟",
    "You're killing it, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 💥",
    "You're on fire, " + playerName + "! You got " + score + " out of 10 correct. Keep the momentum! 🔥",
    "Impressive, " + playerName + "! You got " + score + " out of 10 correct. You're doing fantastic! 👍",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. You're making waves! 🌊",
    "Nice going, " + playerName + "! You got " + score + " out of 10 correct. You're doing amazing! 🌟",
    "Keep it up, " + playerName + "! You got " + score + " out of 10 correct. You're unstoppable! 🚀",
    "Good stuff, " + playerName + "! You got " + score + " out of 10 correct. Keep going strong! 💪",
    "You're doing amazing, " + playerName + "! You got " + score + " out of 10 correct. Keep it going! 🎉",
    "You're doing great, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 👍",
    "Nice job, " + playerName + "! You got " + score + " out of 10 correct. You're making strides! 🏃‍♂️",
    "You're on a winning streak, " + playerName + "! You got " + score + " out of 10 correct. Keep it going! 🏆",
    "Way to go, " + playerName + "! You got " + score + " out of 10 correct. You're unstoppable! 💥",
    "You're on the right track, " + playerName + "! You got " + score + " out of 10 correct. Keep it up! 🚀",
    "You're crushing it, " + playerName + "! You got " + score + " out of 10 correct. Keep up the good work! 👊",
    "You're doing awesome, " + playerName + "! You got " + score + " out of 10 correct. Keep rocking it! 🎸"


];