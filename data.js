const allTheNicknames = [
    ["The Shiv", "all", "mob"],
    ["Trigger", "all", "mob"],
    ["Big Tuna", "male", "mob"],
    ["Egg Man", "male", "mob"],
    ["Grim Reaper", "male", "mob"],
    ["Iceman", "male", "mob"],
    ["Mad Dog", "male", "mob"],
    ["Scotty", "male", "mob"],
    ["Shorty", "male", "mob"],
    ["The Barber", "male", "mob"],
    ["The Enforcer", "male", "mob"],
    ["The Kid", "male", "mob"],
    ["The Muscle", "male", "mob"],
    ["Triggerman", "male", "mob"],
    ["Copper", "all", "law"],
    ["Eagle Eye", "all", "law"],
    ["Gumshoe", "all", "law"],
    ["Iron First", "all", "law"],
    ["Teetotaler", "all", "law"],
    ["The Heat", "all", "law"],
    ["Buttercup", "female", "law"],
    ["Cookie", "female", "law"],
    ["Lady", "female", "law"],
    ["Ma", "female", "law"],
    ["Sunshine", "female", "law"],
    ["Buzz", "male", "law"],
    ["Cool Hand", "male", "law"],
    ["Honest Abe", "male", "law"],
    ["The Knight", "male", "law"]
];


// 


var nicknameGeneratorData = [
    {
        role: "capo",
        gender: "male",
        occupation: "Boss",
        racket: "You name it, I’ve probably done it",
        idol: "Lucky Luciano",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re a dangerous man with a business to run. You know who will follow you until the end and you know who to cut loose when they no longer serve a purpose for you. You’re tough and respected in the business.",
    },
    {
        role: "capo",
        gender: "female",
        occupation: "Boss",
        racket: "You name it, I’ve probably done it",
        idol: "Stephanie St. Clair",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re a dangerous woman with a business to run. You know who will follow you until the end and you know who to cut loose when they no longer serve a purpose for you. You’re tough and respected in the business.",
    },
    {
        role: "capo",
        gender: "all",
        occupation: "The friend of a friend, speakeasy owner",
        racket: "Hey, I don’t want any trouble, okay?",
        idol: "Wilbur Clark",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re known on the streets as \"the friend of the friend.\” Everyone knows you, but you try not to get too involved in other people’s business. You know powerful people, you know what business they’re in, and they supply you the booze you need for your speakeasy when you need it. They won’t get any trouble from you.",
    },
    {
        role: "consigliere",
        gender: "male",
        occupation: "Consigliere",
        racket: "Nothing dirty, just handling the money end of the business",
        idol: "Meyer Lansky",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re the adviser to the boss and to everyone else in the family. They listen to you and respect what you have to say. You give advice when they need it and the rest of the time, you handle the money and make sure things run smoothly.",
    },
    {
        role: "consigliere",
        gender: "female",
        occupation: "Mob Wife",
        racket: "Nothing, I don’t get involved in my husband’s work",
        idol: "Kay Adams, Michael Corleone’s wife",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re a woman who knows more than she lets on when it comes to your husband’s work. You don’t ask a lot of questions, but you’re no slouch—you know what kind of business he’s in. You play your cards close to the vest and they underestimate you, but you use that to your advantage.",
    },
    {
        role: "consigliere",
        gender: "all",
        occupation: "The friend of a friend, speakeasy owner",
        racket: "Hey, I don’t want any trouble, okay?",
        idol: "Wilbur Clark",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re known on the streets as \"the friend of the friend.\” Everyone knows you, but you try not to get too involved in other people’s business. You know powerful people, you know what business they’re in, and they supply you the booze you need for your speakeasy when you need it. They won’t get any trouble from you.",
    },
    {
        role: "wife",
        gender: "male",
        occupation: "Corrupt Politician",
        racket: "Hey, I just take what’s offered to me, okay? Nothin’ wrong with that.",
        idol: "Louisiana Governor Huey Long",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You know what’s going on in your neighborhood and the Mob knows that you know. To keep you quiet, they slip you a few things every now and then—some cash, a free meal for your family at a fine restaurant, a bottle of your favorite bootlegged whiskey. They’re not up to anything violent, so what’s the big deal?",
    },
    {
        role: "wife",
        gender: "female",
        occupation: "Mob Wife",
        racket: "Nothing, I don’t get involved in my husband’s work",
        idol: "Kay Adams, Michael Corleone’s wife",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re a woman who knows more than she lets on when it comes to your husband’s work. You don’t ask a lot of questions, but you’re no slouch—you know what kind of business he’s in. You play your cards close to the vest and they underestimate you, but you use that to your advantage.",
    },
    {
        role: "wife",
        gender: "all",
        occupation: "The friend of a friend, speakeasy owner",
        racket: "Hey, I don’t want any trouble, okay?",
        idol: "Wilbur Clark",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re known on the streets as \"the friend of the friend.\” Everyone knows you, but you try not to get too involved in other people’s business. You know powerful people, you know what business they’re in, and they supply you the booze you need for your speakeasy when you need it. They won’t get any trouble from you.",
    },
    {
        role: "politician",
        gender: "male",
        results: "Corrupt Politician",
        occupation: "Corrupt Politician",
        racket: "Hey, I just take what’s offered to me, okay? Nothin’ wrong with that.",
        idol: "Louisiana Governor Huey Long",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You know what’s going on in your neighborhood and the Mob knows that you know. To keep you quiet, they slip you a few things every now and then—some cash, a free meal for your family at a fine restaurant, a bottle of your favorite bootlegged whiskey. They’re not up to anything violent, so what’s the big deal?",
    },
    {
        role: "politician",
        gender: "female",
        results: "Mob Wife",
        occupation: "Mob Wife",
        racket: "Nothing, I don’t get involved in my husband’s work",
        idol: "Kay Adams, Michael Corleone’s wife",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re a woman who knows more than she lets on when it comes to your husband’s work. You don’t ask a lot of questions, but you’re no slouch—you know what kind of business he’s in. You play your cards close to the vest and they underestimate you, but you use that to your advantage.",
    },
    {
        role: "politician",
        gender: "Gender Neutral ",
        results:  "Mostly Good Cop",
        occupation: "Mostly Good Cop",
        racket: "Accepted a one-time bribe",
        idol: "J. Edgar Hoover",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You slipped up once when your family was having a hard time. You knew it was wrong, but what choice did you have? You’ve felt guilty ever since and plan to bust as many gangsters as you can to make up for it.",
    },
    {
        role: "cop",
        gender: "Male",
        occupation: "Cop",
        racket: "None",
        idol: "Estes Kefauver",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "When it comes to your work, you mean business. You know there are other cops who have taken bribes, maybe even meet in secret with criminals. You’ve made it your mission to be a clean cop, no matter what—it’s already hard enough being a cop in this town.",
    },
    {
        role: "cop",
        gender: "female",
        occupation: "Cop",
        racket: "None",
        idol: "Estes Kefauver",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "When it comes to your work, you mean business. You know there are other cops who have taken bribes, maybe even meet in secret with criminals. You’ve made it your mission to be a clean cop, no matter what—it’s already hard enough being a cop in this town.",
    },
    {
        role: "cop",
        gender: "all",
        occupation: "Cop",
        racket: "None",
        idol: "Estes Kefauver",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "When it comes to your work, you mean business. You know there are other cops who have taken bribes, maybe even meet in secret with criminals. You’ve made it your mission to be a clean cop, no matter what—it’s already hard enough being a cop in this town.",
    },
    {
        role: "soldier",
        gender: "male",
        occupation: "Boss",
        racket: "You name it, I’ve probably done it",
        idol: "Lucky Luciano",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re a dangerous man with a business to run. You know who will follow you until the end and you know who to cut loose when they no longer serve a purpose for you. You’re tough and respected in the business.",
    },
    {
        role: "soldier",
        gender: "female",
        occupation: "Mob Girlfriend",
        racket: "Men buy you things, who are you to turn them down?",
        idol: "Virginia Hill",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re a lady who loves the finer things in life. If the men in your life want to buy you things, take you to dinner, parade you around town—why deny them that? Some might say there’s a certain power in having so many, let’s just say, influential men in your little black book.",
    },
    {
        role: "soldier",
        gender: "all",
        occupation: "The friend of a friend, speakeasy owner",
        racket: "Hey, I don’t want any trouble, okay?",
        idol: "Wilbur Clark",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re known on the streets as \"the friend of the friend.\” Everyone knows you, but you try not to get too involved in other people’s business. You know powerful people, you know what business they’re in, and they supply you the booze you need for your speakeasy when you need it. They won’t get any trouble from you.",
    },
    {
        role: "boss",
        gender: "male",
        occupation: "Boss",
        racket: "You name it, I’ve probably done it",
        idol: "Lucky Luciano",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re a dangerous man with a business to run. You know who will follow you until the end and you know who to cut loose when they no longer serve a purpose for you. You’re tough and respected in the business.",
    },
    {
        role: "boss",
        gender: "female",
        occupation: "Boss",
        racket: "You name it, I’ve probably done it",
        idol: "Stephanie St. Clair",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re a dangerous woman with a business to run. You know who will follow you until the end and you know who to cut loose when they no longer serve a purpose for you. You’re tough and respected in the business.",
    },
    {
        role: "boss",
        gender: "all",
        occupation: "The friend of a friend, speakeasy owner",
        racket: "Hey, I don’t want any trouble, okay?",
        idol: "Wilbur Clark",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re known on the streets as \"the friend of the friend.\” Everyone knows you, but you try not to get too involved in other people’s business. You know powerful people, you know what business they’re in, and they supply you the booze you need for your speakeasy when you need it. They won’t get any trouble from you.",
    },
    {
        role: "knowsomebody",
        gender: "male",
        occupation: "Corrupt Politician",
        racket: "Hey, I just take what’s offered to me, okay? Nothin’ wrong with that.",
        idol: "Louisiana Governor Huey Long",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You know what’s going on in your neighborhood and the Mob knows that you know. To keep you quiet, they slip you a few things every now and then—some cash, a free meal for your family at a fine restaurant, a bottle of your favorite bootlegged whiskey. They’re not up to anything violent, so what’s the big deal?",
    },
    {
        role: "knowsomebody",
        gender: "female",
        occupation: "The friend of a friend, speakeasy owner",
        racket: "Hey, I don’t want any trouble, okay?",
        idol: "Wilbur Clark",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re known on the streets as \"the friend of the friend.\” Everyone knows you, but you try not to get too involved in other people’s business. You know powerful people, you know what business they’re in, and they supply you the booze you need for your speakeasy when you need it. They won’t get any trouble from you.",
    },
    {
        role: "knowsomebody",
        gender: "all",
        occupation: "The friend of a friend, speakeasy owner",
        racket: "Hey, I don’t want any trouble, okay?",
        idol: "Wilbur Clark",
        img: "img/Results-6.jpg",
        imgBlur: "img/Results-6.jpg?=blur",
        description: "You’re known on the streets as \"the friend of the friend.\” Everyone knows you, but you try not to get too involved in other people’s business. You know powerful people, you know what business they’re in, and they supply you the booze you need for your speakeasy when you need it. They won’t get any trouble from you.",
    }
];
