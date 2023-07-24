const books = [
        {
            "id": 1,
            "title": "Unlocking Android",
            "isbn": "1933988673",
            "pageCount": 416,
            "publishedDate": {
                "$date": "2009-04-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
            "description": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
            "status": "PUBLISH",
            "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
            "categories": ["Open Source", "Mobile"]
        }, {
            "id": 2,
            "title": "Android in Action, Second Edition",
            "isbn": "1935182722",
            "pageCount": 592,
            "publishedDate": {
                "$date": "2011-01-14T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
            "description": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
            "status": "PUBLISH",
            "authors": ["W. Frank Ableson", "Robi Sen"],
            "categories": ["Java"]
        }, {
            "id": 3,
            "title": "Specification by Example",
            "isbn": "1617290084",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2011-06-03T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
            "status": "PUBLISH",
            "authors": ["Gojko Adzic"],
            "categories": ["Software Engineering"]
        }, {
            "id": 4,
            "title": "Flex 3 in Action",
            "isbn": "1933988746",
            "pageCount": 576,
            "publishedDate": {
                "$date": "2009-02-02T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
            "status": "PUBLISH",
            "authors": ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
            "categories": ["Internet"]
        }, {
            "id": 5,
            "title": "Flex 4 in Action",
            "isbn": "1935182420",
            "pageCount": 600,
            "publishedDate": {
                "$date": "2010-11-15T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            "status": "PUBLISH",
            "authors": ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            "categories": ["Internet"]
        }, {
            "id": 6,
            "title": "Collective Intelligence in Action",
            "isbn": "1933988312",
            "pageCount": 425,
            "publishedDate": {
                "$date": "2008-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
            "status": "PUBLISH",
            "authors": ["Satnam Alag"],
            "categories": ["Internet"]
        }, {
            "id": 7,
            "title": "Zend Framework in Action",
            "isbn": "1933988320",
            "pageCount": 432,
            "publishedDate": {
                "$date": "2008-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
            "description": "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
            "status": "PUBLISH",
            "authors": ["Rob Allen", "Nick Lo", "Steven Brown"],
            "categories": ["Web Development"]
        }, {
            "id": 8,
            "title": "Flex on Java",
            "isbn": "1933988797",
            "pageCount": 265,
            "publishedDate": {
                "$date": "2010-10-15T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
            "description": "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
            "status": "PUBLISH",
            "authors": ["Bernerd Allmon", "Jeremy Anderson"],
            "categories": ["Internet"]
        }, {
            "id": 9,
            "title": "Griffon in Action",
            "isbn": "1935182234",
            "pageCount": 375,
            "publishedDate": {
                "$date": "2012-06-04T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
            "description": "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
            "status": "PUBLISH",
            "authors": ["Andres Almiray", "Danno Ferrin", "", "James Shingler"],
            "categories": ["Java"]
        }, {
            "id": 10,
            "title": "OSGi in Depth",
            "isbn": "193518217X",
            "pageCount": 325,
            "publishedDate": {
                "$date": "2011-12-12T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
            "description": "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
            "status": "PUBLISH",
            "authors": ["Alexandre de Castro Alves"],
            "categories": ["Java"]
        }, {
            "id": 11,
            "title": "Flexible Rails",
            "isbn": "1933988509",
            "pageCount": 592,
            "publishedDate": {
                "$date": "2008-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
            "description": "\"Flexible Rails created a standard to which I hold other technical books. You definitely get your money's worth.\"",
            "status": "PUBLISH",
            "authors": ["Peter Armstrong"],
            "categories": ["Web Development"]
        }, {
            "id": 13,
            "title": "Hello! Flex 4",
            "isbn": "1933988762",
            "pageCount": 258,
            "publishedDate": {
                "$date": "2009-11-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
            "description": "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
            "status": "PUBLISH",
            "authors": ["Peter Armstrong"],
            "categories": ["Internet"]
        }, {
            "id": 14,
            "title": "Coffeehouse",
            "isbn": "1884777384",
            "pageCount": 316,
            "publishedDate": {
                "$date": "1997-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
            "description": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.",
            "status": "PUBLISH",
            "authors": ["Levi Asher", "Christian Crumlish"],
            "categories": ["Miscellaneous"]
        }, {
            "id": 15,
            "title": "Team Foundation Server 2008 in Action",
            "isbn": "1933988592",
            "pageCount": 344,
            "publishedDate": {
                "$date": "2008-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
            "status": "PUBLISH",
            "authors": ["Jamil Azher"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 16,
            "title": "Brownfield Application Development in .NET",
            "isbn": "1933988711",
            "pageCount": 550,
            "publishedDate": {
                "$date": "2010-04-16T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
            "description": "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.",
            "status": "PUBLISH",
            "authors": ["Kyle Baley", "Donald Belcham"],
            "categories": ["Microsoft"]
        }, {
            "id": 17,
            "title": "MongoDB in Action",
            "isbn": "1935182870",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2011-12-12T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
            "description": "MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.",
            "status": "PUBLISH",
            "authors": ["Kyle Banker"],
            "categories": ["Next Generation Databases"]
        }, {
            "id": 18,
            "title": "Distributed Application Development with PowerBuilder 6.0",
            "isbn": "1884777686",
            "pageCount": 504,
            "publishedDate": {
                "$date": "1998-06-01T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": ["Michael J. Barlotta"],
            "categories": ["PowerBuilder"]
        }, {
            "id": 19,
            "title": "Jaguar Development with PowerBuilder 7",
            "isbn": "1884777864",
            "pageCount": 550,
            "publishedDate": {
                "$date": "1999-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta2.jpg",
            "description": "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.",
            "status": "PUBLISH",
            "authors": ["Michael Barlotta"],
            "categories": ["PowerBuilder", "Client-Server"]
        }, {
            "id": 20,
            "title": "Taming Jaguar",
            "isbn": "1884777686",
            "pageCount": 362,
            "publishedDate": {
                "$date": "2000-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg",
            "status": "PUBLISH",
            "authors": ["Michael J. Barlotta", "Jason R. Weiss"],
            "categories": ["PowerBuilder"]
        }, {
            "id": 21,
            "title": "3D User Interfaces with Java 3D",
            "isbn": "1884777902",
            "pageCount": 520,
            "publishedDate": {
                "$date": "2000-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barrilleaux.jpg",
            "status": "PUBLISH",
            "authors": ["Jon Barrilleaux"],
            "categories": ["Java", "Computer Graphics"]
        }, {
            "id": 22,
            "title": "Hibernate in Action",
            "isbn": "193239415X",
            "pageCount": 400,
            "publishedDate": {
                "$date": "2004-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer.jpg",
            "description": "\"2005 Best Java Book!\" -- Java Developer's Journal",
            "status": "PUBLISH",
            "authors": ["Christian Bauer", "Gavin King"],
            "categories": ["Java"]
        }, {
            "id": 23,
            "title": "Hibernate in Action (Chinese Edition)",
            "pageCount": 400,
            "publishedDate": {
                "$date": "1999-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer-cn.jpg",
            "status": "PUBLISH",
            "authors": ["Christian Bauer", "Gavin King"],
            "categories": ["Java"]
        }, {
            "id": 24,
            "title": "Java Persistence with Hibernate",
            "isbn": "1932394885",
            "pageCount": 880,
            "publishedDate": {
                "$date": "2006-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg",
            "description": "\"...this book is the ultimate solution. If you are going to use Hibernate in your application, you have no other choice, go rush to the store and get this book.\" --JavaLobby",
            "status": "PUBLISH",
            "authors": ["Christian Bauer", "Gavin King"],
            "categories": ["Java"]
        }, {
            "id": 25,
            "title": "JSTL in Action",
            "isbn": "1930110529",
            "pageCount": 480,
            "publishedDate": {
                "$date": "2002-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bayern.jpg",
            "status": "PUBLISH",
            "authors": ["Shawn Bayern"],
            "categories": ["Internet"]
        }, {
            "id": 26,
            "title": "iBATIS in Action",
            "isbn": "1932394826",
            "pageCount": 384,
            "publishedDate": {
                "$date": "2007-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg",
            "description": "   Gets new users going and gives experienced users in-depth coverage of advanced features.       Jeff Cunningham, The Weather Channel Interactive",
            "status": "PUBLISH",
            "authors": ["Clinton Begin", "Brandon Goodin", "Larry Meadors"],
            "categories": ["Web Development"]
        }, {
            "id": 27,
            "title": "Designing Hard Software",
            "isbn": "133046192",
            "pageCount": 350,
            "publishedDate": {
                "$date": "1997-02-01T00:00:00.000-0800"
            },
            "description": "\"This book is well written ... The author does not fear to be controversial. In doing so, he writes a coherent book.\" --Dr. Frank J. van der Linden, Phillips Research Laboratories",
            "status": "PUBLISH",
            "authors": ["Douglas W. Bennett"],
            "categories": ["Object-Oriented Programming", "S"]
        }, {
            "id": 28,
            "title": "Hibernate Search in Action",
            "isbn": "1933988649",
            "pageCount": 488,
            "publishedDate": {
                "$date": "2008-12-21T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bernard.jpg",
            "description": "\"A great resource for true database independent full text search.\" --Aaron Walker, base2Services",
            "status": "PUBLISH",
            "authors": ["Emmanuel Bernard", "John Griffin"],
            "categories": ["Java"]
        }, {
            "id": 29,
            "title": "jQuery in Action",
            "isbn": "1933988355",
            "pageCount": 376,
            "publishedDate": {
                "$date": "2008-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault.jpg",
            "description": "\"The best-thought-out and researched piece of literature on the jQuery library.\" --From the forward by John Resig, Creator of jQuery",
            "status": "PUBLISH",
            "authors": ["Bear Bibeault", "Yehuda Katz"],
            "categories": ["Web Development"]
        }, {
            "id": 30,
            "title": "jQuery in Action, Second Edition",
            "isbn": "1935182323",
            "pageCount": 488,
            "publishedDate": {
                "$date": "2010-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault2.jpg",
            "description": "jQuery in Action, Second Edition is a fast-paced introduction to jQuery that will take your JavaScript programming to the next level. An in-depth rewrite of the bestselling first edition, this edition provides deep and practical coverage of the latest jQuery and jQuery UI releases. The book's unique \"lab pages\" anchor the explanation of each new concept in a practical example. You'll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. This comprehensive guide also teaches you how jQuery interacts with other tools and frameworks and how to build jQuery plugins. ",
            "status": "PUBLISH",
            "authors": ["Bear Bibeault", "Yehuda Katz"],
            "categories": ["Java"]
        }, {
            "id": 31,
            "title": "Building Secure and Reliable Network Applications",
            "isbn": "1884777295",
            "pageCount": 591,
            "publishedDate": {
                "$date": "1996-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/birman.jpg",
            "description": "\"... tackles the difficult problem of building reliable distributed computing systems in a way that not only presents the principles but also describes proven practical solutions.\" --John Warne, BNR Europe",
            "status": "PUBLISH",
            "authors": ["Kenneth P. Birman"],
            "categories": ["Networking", "Theory"]
        }, {
            "id": 32,
            "title": "Ruby for Rails",
            "isbn": "1932394699",
            "pageCount": 532,
            "publishedDate": {
                "$date": "2006-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
            "description": "The word is out: with Ruby on Rails you can build powerful Web applications easily and quickly! And just like the Rails framework itself, Rails applications are Ruby programs. That means you can   t tap into the full power of Rails unless you master the Ruby language.",
            "status": "PUBLISH",
            "authors": ["David A. Black"],
            "categories": ["Web Development"]
        }, {
            "id": 33,
            "title": "The Well-Grounded Rubyist",
            "isbn": "1933988657",
            "pageCount": 520,
            "publishedDate": {
                "$date": "2009-04-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black2.jpg",
            "description": "What would appear to be the most complex topic of the book is in fact surprisingly easy to assimilate, and one realizes that the efforts of the author to gradually lead us to a sufficient knowledge of Ruby in order to tackle without pain the most difficult subjects, bears its fruit.       Eric Grimois, Developpez.com",
            "status": "PUBLISH",
            "authors": ["David A. Black"],
            "categories": ["Programming"]
        }, {
            "id": 35,
            "title": "Website Owner's Manual",
            "isbn": "1933988452",
            "pageCount": 296,
            "publishedDate": {
                "$date": "2009-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/boag.jpg",
            "description": "Website Owner's Manual helps you form a vision for your site, guides you through the process of selecting a web design agency, and gives you enough background information to make intelligent decisions throughout the development process. This book provides a jargon-free overview of web design, including accessibility, usability, online marketing, and web development techniques. You'll gain a practical understanding of the technologies, processes, and ideas that drive a successful website.",
            "status": "PUBLISH",
            "authors": ["Paul A. Boag"],
            "categories": ["Internet"]
        }, {
            "id": 36,
            "title": "ASP.NET 4.0 in Practice",
            "isbn": "1935182463",
            "pageCount": 504,
            "publishedDate": {
                "$date": "2011-05-15T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bochicchio.jpg",
            "description": "ASP.NET 4.0 in Practice contains real world techniques from well-known professionals who have been using ASP.NET since the first previews.",
            "status": "PUBLISH",
            "authors": ["Daniele Bochicchio", "Stefano Mostarda", "", "Marco De Sanctis"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 37,
            "title": "Hello! Python",
            "isbn": "1935182080",
            "pageCount": 350,
            "publishedDate": {
                "$date": "2012-02-13T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/briggs.jpg",
            "description": "Hello! Python fully covers the building blocks of Python programming and gives you a gentle introduction to more advanced topics such as object oriented programming, functional programming, network programming, and program design. New (or nearly new) programmers will learn most of what they need to know to start using Python immediately.",
            "status": "PUBLISH",
            "authors": ["Anthony Briggs"],
            "categories": ["Python"]
        }, {
            "id": 38,
            "title": "PFC Programmer's Reference Manual",
            "isbn": "1884777554",
            "pageCount": 368,
            "publishedDate": {
                "$date": "1998-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brooks.jpg",
            "status": "PUBLISH",
            "authors": ["Richard Brooks"],
            "categories": ["PowerBuilder"]
        }, {
            "id": 39,
            "title": "Graphics File Formats",
            "isbn": "133034054",
            "pageCount": 484,
            "publishedDate": {
                "$date": "1995-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brown.jpg",
            "status": "PUBLISH",
            "authors": ["C. Wayne Brown", "Barry J. Shepherd"],
            "categories": ["Computer Graphics"]
        }, {
            "id": 40,
            "title": "Visual Object Oriented Programming",
            "isbn": "131723979",
            "pageCount": 280,
            "publishedDate": {
                "$date": "1995-02-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/burnett.jpg",
            "status": "PUBLISH",
            "authors": ["Margaret M. Burnett", "Adele Goldberg", "", "Ted G. Lewis"],
            "categories": ["Programming"]
        }, {
            "id": 41,
            "title": "iOS in Practice",
            "isbn": "1617291269",
            "pageCount": 325,
            "publishedDate": {
                "$date": "2013-11-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cahill.jpg",
            "status": "PUBLISH",
            "authors": ["Bear P. Cahill"],
            "categories": ["Mobile Technology"]
        }, {
            "id": 42,
            "title": "iPhone in Action",
            "isbn": "193398886X",
            "pageCount": 472,
            "publishedDate": {
                "$date": "2008-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/callen.jpg",
            "description": "   There is not another iPhone title that does such a great coverage of both Web and SDK topics under one roof, thus providing a well-rounded developer education.       Vladimir Pasman, Cocoacast.com",
            "status": "PUBLISH",
            "authors": ["Christopher Allen", "Shannon Appelcline"],
            "categories": ["Web Development"]
        }, {
            "id": 43,
            "title": "Silverlight 2 in Action",
            "isbn": "1933988428",
            "pageCount": 400,
            "publishedDate": {
                "$date": "2008-10-31T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/campbell.jpg",
            "description": "   Silverlight 2 in Action gives you a solid, well-thought out and coherent foundation for building RIA web applications, and provides you with lots of technical details without ever becoming cloudy.       Golo Roden, author, trainer and speaker for .NET technologies",
            "status": "PUBLISH",
            "authors": ["Chad A. Campbell", "John Stockton"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 45,
            "title": "The Quick Python Book, Second Edition",
            "isbn": "193518220X",
            "pageCount": 360,
            "publishedDate": {
                "$date": "2010-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ceder.jpg",
            "description": "This revision of Manning's popular The Quick Python Book offers a clear, crisp introduction to the elegant Python programming language and its famously easy-to-read syntax. Written for programmers new to Python, this updated edition covers features common to other languages concisely, while introducing Python's comprehensive standard functions library and unique features in detail.",
            "status": "PUBLISH",
            "authors": ["Naomi R. Ceder"],
            "categories": ["Python"]
        }, {
            "id": 46,
            "title": "Internet and Intranet Applications with PowerBuilder 6",
            "isbn": "1884777600",
            "pageCount": 390,
            "publishedDate": {
                "$date": "2000-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cervenka.jpg",
            "status": "PUBLISH",
            "authors": ["Tom Cervenka"],
            "categories": ["PowerBuilder"]
        }, {
            "id": 48,
            "title": "Practical Methods for Your Year 2000 Problem",
            "isbn": "188477752X",
            "pageCount": 236,
            "publishedDate": {
                "$date": "1998-01-01T00:00:00.000-0800"
            },
            "description": "Practical Methods for Your Year 2000 Problem gives the Year 2000 project team a step-by-step methodology for addressing the Year 2000 problem.",
            "status": "PUBLISH",
            "authors": ["Robert Chapman"],
            "categories": ["Business"]
        }, {
            "id": 51,
            "title": "Mobile Agents",
            "isbn": "1884777368",
            "pageCount": 320,
            "publishedDate": {
                "$date": "1997-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cockayne.jpg",
            "description": "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet.",
            "status": "PUBLISH",
            "authors": ["William R. Cockayne and Michael Zyda", "editors"],
            "categories": ["Internet"]
        }, {
            "id": 52,
            "title": "Spring Dynamic Modules in Action",
            "isbn": "1935182307",
            "pageCount": 450,
            "publishedDate": {
                "$date": "2010-09-04T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cogoluegnes.jpg",
            "description": "Spring Dynamic Modules in Action introduces Spring DM and OSGi to Java EE developers and architects. It presents the fundamental concepts of OSGi-based apps and maps them to the familiar ideas of the Spring framework. Then, it engages you with the techniques and concepts you'll need to develop stable, flexible enterprise apps. You'll learn how to embed a Spring container inside an OSGi bundle, and how Spring DM lets you blend Spring strengths like dependency injection with OSGi-based services. Along the way, you'll see how Spring DM handles data access and web-based components, and you'll explore topics like unit testing and configuration in an OSGi-based environment.",
            "status": "PUBLISH",
            "authors": ["Arnaud Cogoluegnes", "Thierry Templier", "", "Andy Piper"],
            "categories": ["Java"]
        }, {
            "id": 53,
            "title": "SQL Server 2008 Administration in Action",
            "isbn": "193398872X",
            "pageCount": 468,
            "publishedDate": {
                "$date": "2009-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/colledge.jpg",
            "status": "PUBLISH",
            "authors": ["Rod Colledge"],
            "categories": ["Microsoft"]
        }, {
            "id": 54,
            "title": "Android in Practice",
            "isbn": "1935182927",
            "pageCount": 500,
            "publishedDate": {
                "$date": "2011-09-30T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/collins.jpg",
            "description": "Android in Practice is treasure trove of Android goodness, with over 100 tested, ready-to-use techniques including complete end-to-end example applications and practical tips for real world mobile application developers. Written by real world Android developers, this book addresses the trickiest questions raised in forums and mailing lists. Using an easy-to-follow problem/solution/discussion format, it dives into important topics not covered in other Android books, like advanced drawing and graphics, testing and instrumentation, building and deploying applications, using alternative languages, and native development.",
            "status": "PUBLISH",
            "authors": ["Charlie Collins", "Michael D. Galpin", "", "Matthias Kaeppler"],
            "categories": ["Mobile Technology"]
        }, {
            "id": 55,
            "title": "Object Oriented Perl",
            "isbn": "1884777791",
            "pageCount": 512,
            "publishedDate": {
                "$date": "1999-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/conway.jpg",
            "status": "PUBLISH",
            "authors": ["Damian Conway"],
            "categories": ["Object-Oriented Programming", "P"]
        }, {
            "id": 56,
            "title": "GWT in Practice",
            "isbn": "1933988290",
            "pageCount": 376,
            "publishedDate": {
                "$date": "2008-04-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cooper.jpg",
            "status": "PUBLISH",
            "authors": ["Robert Cooper", "Charles Collins"],
            "categories": ["Web Development"]
        }, {
            "id": 59,
            "title": "Ajax in Action",
            "isbn": "1932394613",
            "pageCount": 680,
            "publishedDate": {
                "$date": "2005-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane.jpg",
            "status": "PUBLISH",
            "authors": ["Dave Crane", "Eric Pascarello with Darren James"],
            "categories": ["XML", "Internet"]
        }, {
            "id": 60,
            "title": "Ajax in Practice",
            "isbn": "1932394990",
            "pageCount": 536,
            "publishedDate": {
                "$date": "2007-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane2.jpg",
            "status": "PUBLISH",
            "authors": ["Dave Crane", "Jord Sonneveld and Bear Bibeault with Ted Goddard", "Chris Gray", "Ram Venkataraman", "Joe Walker"],
            "categories": ["Web Development"]
        }, {
            "id": 61,
            "title": "Prototype and Scriptaculous in Action",
            "isbn": "1933988037",
            "pageCount": 544,
            "publishedDate": {
                "$date": "2007-04-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane3.jpg",
            "status": "PUBLISH",
            "authors": ["Dave Crane", "Bear Bibeault with Tom Locke"],
            "categories": ["Web Development"]
        }, {
            "id": 63,
            "title": "POJOs in Action",
            "isbn": "1932394583",
            "pageCount": 592,
            "publishedDate": {
                "$date": "2006-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crichardson.jpg",
            "description": "\"POJOs in Action is required reading for battle-weary EJB developers and for new developers who want to avoid the sins of the fathers by using lightweight frameworks.    -- C# Online.NET",
            "status": "PUBLISH",
            "authors": ["Chris Richardson"],
            "categories": ["Java"]
        }, {
            "id": 64,
            "title": "Data Munging with Perl",
            "isbn": "1930110006",
            "pageCount": 304,
            "publishedDate": {
                "$date": "2001-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cross.jpg",
            "status": "PUBLISH",
            "authors": ["David Cross"],
            "categories": ["Perl"]
        }, {
            "id": 65,
            "title": "Hello! HTML5 & CSS3",
            "isbn": "1935182897",
            "pageCount": 325,
            "publishedDate": {
                "$date": "2012-10-17T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther.jpg",
            "description": "Quick and Easy HTML5 and CSS3 is written for the web designer or developer who wants a fast, example-oriented introduction to the new HTML and CSS features. After a quick review of the basics, you'll turn to what's new. Start by learning to apply important new elements and attributes by building your first real HTML5 pages. You'll then take a quick tour through the new APIs: Form Validation, Canvas, Drag & Drop, Geolocation and Offline Applications. You'll also discover how to include video and audio on your pages without plug-ins, and how to draw interactive vector graphics with SVG.",
            "status": "PUBLISH",
            "authors": ["Rob Crowther"],
            "categories": ["Internet"]
        }, {
            "id": 66,
            "title": "Seam in Action",
            "isbn": "1933988401",
            "pageCount": 624,
            "publishedDate": {
                "$date": "2008-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dallen.jpg",
            "description": "Seam in Action goes into great detail on the ways in which Seam helps reduce the burden of integration with different technologies such as Hibernate and JSF, allowing the developer to focus on the core business objective at hand.       Shobana Jayaraman, Digital Infrastructure Analyst, University of Texas Southwestern Medical Center Library, The Tech Static",
            "status": "PUBLISH",
            "authors": ["Dan Allen"],
            "categories": ["Java"]
        }, {
            "id": 67,
            "title": "Wicket in Action",
            "isbn": "1932394982",
            "pageCount": 392,
            "publishedDate": {
                "$date": "2008-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dashorst.jpg",
            "status": "PUBLISH",
            "authors": ["Martijn Dashorst", "Eelco Hillenius"],
            "categories": ["Web Development"]
        }, {
            "id": 68,
            "title": "Open Source SOA",
            "isbn": "1933988541",
            "pageCount": 448,
            "publishedDate": {
                "$date": "2009-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/davis.jpg",
            "status": "PUBLISH",
            "authors": ["Jeff Davis"],
            "categories": ["Java"]
        }, {
            "id": 69,
            "title": "Struts 2 in Action",
            "isbn": "193398807X",
            "pageCount": 432,
            "publishedDate": {
                "$date": "2008-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dbrown.jpg",
            "status": "PUBLISH",
            "authors": ["Donald Brown", "Chad Michael Davis", "", "Scott Stanlick"],
            "categories": ["Java"]
        }, {
            "id": 70,
            "title": "Essential Guide to Peoplesoft Development and Customization",
            "isbn": "1884777929",
            "pageCount": 1101,
            "publishedDate": {
                "$date": "2000-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/delia.jpg",
            "status": "PUBLISH",
            "authors": ["Tony DeLia", "Galina Landres", "Isidor Rivera", "Prakash Sankaran"],
            "categories": ["Client-Server"]
        }, {
            "id": 71,
            "title": ".NET Multithreading",
            "isbn": "1930110545",
            "pageCount": 360,
            "publishedDate": {
                "$date": "2002-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dennis.jpg",
            "status": "PUBLISH",
            "authors": ["Alan Dennis"],
            "categories": ["Microsoft .NET", "Internet"]
        }, {
            "id": 72,
            "title": "SCWCD Exam Study Kit Second Edition",
            "isbn": "1932394389",
            "pageCount": 560,
            "publishedDate": {
                "$date": "2005-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/deshmukh2.jpg",
            "status": "PUBLISH",
            "authors": ["Hanumant Deshmukh", "Jignesh Malavia", "", "Matthew Scarpino"],
            "categories": ["Internet"]
        }, {
            "id": 73,
            "title": "Spring Roo in Action",
            "isbn": "193518296X",
            "pageCount": 500,
            "publishedDate": {
                "$date": "2012-04-13T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rimple.jpg",
            "status": "PUBLISH",
            "authors": ["Ken Rimple", "Srini Penchikala"],
            "categories": ["Java"]
        }, {
            "id": 74,
            "title": "SOA Governance in Action",
            "isbn": "1617290270",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-07-27T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dirksen.jpg",
            "status": "PUBLISH",
            "authors": ["Jos Dirksen"],
            "categories": ["java"]
        }, {
            "id": 75,
            "title": "RSS and Atom in Action",
            "isbn": "1932394494",
            "pageCount": 400,
            "publishedDate": {
                "$date": "2006-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dmjohnson.jpg",
            "status": "PUBLISH",
            "authors": ["Dave Johnson"],
            "categories": ["Internet"]
        }, {
            "id": 76,
            "title": "LDAP Programming, Management and Integration",
            "isbn": "1930110405",
            "pageCount": 352,
            "publishedDate": {
                "$date": "2002-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/donley.jpg",
            "status": "PUBLISH",
            "authors": ["Clayton Donley"],
            "categories": ["Internet"]
        }, {
            "id": 77,
            "title": "Mule in Action",
            "isbn": "1933988967",
            "pageCount": 432,
            "publishedDate": {
                "$date": "2009-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dossot.jpg",
            "status": "PUBLISH",
            "authors": ["David Dossot", "John D'Emic"],
            "categories": ["Java", "Software Engineering"]
        }, {
            "id": 79,
            "title": "Java Foundation Classes",
            "isbn": "1884777678",
            "pageCount": 1088,
            "publishedDate": {
                "$date": "2001-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drye.jpg",
            "status": "PUBLISH",
            "authors": ["Stephen C. Drye", "William C. Wake"],
            "categories": ["Java"]
        }, {
            "id": 117,
            "title": "Managing Components with Modeler",
            "isbn": "1932394524k-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal11.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 118,
            "title": "Command-line Processing with CLI",
            "isbn": "1932394524l-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal12.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 119,
            "title": "Understanding and Using Chain",
            "isbn": "1932394524m-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal13.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 120,
            "title": "Working with the Logging and Discovery Components",
            "isbn": "1932394524n-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal14.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 121,
            "title": "Uploading files with FileUpload",
            "isbn": "1932394524b-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal2.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 122,
            "title": "Handling Protocols with the Net Component",
            "isbn": "1932394524c-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal3.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 123,
            "title": "XML Parsing with Digester",
            "isbn": "1932394524d-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal4.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 124,
            "title": "JXPath and Betwixt: Working with XML",
            "isbn": "1932394524e-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal5.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 125,
            "title": "Validating Data with Validator",
            "isbn": "1932394524f-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal6.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 126,
            "title": "Enhancing Java Core Libraries with Collections",
            "isbn": "1932394524g-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal7.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 127,
            "title": "Enhancing Java Core Libraries with BeanUtils and Lang",
            "isbn": "1932394524h-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal8.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 128,
            "title": "Pool and DBCP: Creating and Using Object Pools",
            "isbn": "1932394524i-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal9.jpg",
            "status": "PUBLISH",
            "authors": ["Vikram Goyal"],
            "categories": ["Java"]
        }, {
            "id": 129,
            "title": "Python and Tkinter Programming",
            "isbn": "1884777813",
            "pageCount": 688,
            "publishedDate": {
                "$date": "2000-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grayson.jpg",
            "status": "PUBLISH",
            "authors": ["John E. Grayson"],
            "categories": ["Python"]
        }, {
            "id": 130,
            "title": "Microsoft.NET for Programmers",
            "isbn": "1930110197",
            "pageCount": 386,
            "publishedDate": {
                "$date": "2002-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grimes.jpg",
            "status": "PUBLISH",
            "authors": ["Fergal Grimes"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 131,
            "title": "Grails in Action",
            "isbn": "1933988932",
            "pageCount": 520,
            "publishedDate": {
                "$date": "2009-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gsmith.jpg",
            "description": "Grails in Action is a comprehensive guide to the Grails framework. First, the basics: the domain model, controllers, views, and services. Then, the fun! Dive into a Twitter-style app with features like AJAX/JSON, animation, search, wizards   even messaging and Jabber integration. Along the way, you'll discover loads of great plugins that'll make your app shine. Learn to integrate with existing Java systems using Spring and Hibernate. You'll need basic familiarity with Java and the web.",
            "status": "PUBLISH",
            "authors": ["Glen Smith", "Peter Ledbrook"],
            "categories": ["Java"]
        }, {
            "id": 132,
            "title": "Up to Speed with Swing, Second Edition",
            "isbn": "1884777759",
            "pageCount": 560,
            "publishedDate": {
                "$date": "1999-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gutz2.jpg",
            "description": "Now in its Second Edition, Up to Speed with Swing is for you if you want to get on the fast track to Java Swing. The second edition has been extensively updated to cover Java 1.2 with additional code examples and illustrations.",
            "status": "PUBLISH",
            "authors": ["Steven Gutz"],
            "categories": ["Java"]
        }, {
            "id": 133,
            "title": "OSGi in Action",
            "isbn": "1933988916",
            "pageCount": 576,
            "publishedDate": {
                "$date": "2011-04-06T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hall.jpg",
            "description": "OSGi in Action is a comprehensive guide to OSGi with two primary goals. First, it provides a clear introduction to OSGi concepts with examples that are relevant both for architects and developers. The central idea of OSGi is modularity, so you start by learning about OSGi bundles. You'll then see how OSGi handles module lifecycles and follow up with how it promotes service-oriented interaction among application components.",
            "status": "PUBLISH",
            "authors": ["Richard S. Hall", "Karl Pauls", "Stuart McCulloch", "", "David Savage"],
            "categories": ["Internet"]
        }, {
            "id": 135,
            "title": "GWT in Action",
            "isbn": "1933988231",
            "pageCount": 632,
            "publishedDate": {
                "$date": "2007-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hanson.jpg",
            "status": "PUBLISH",
            "authors": ["Robert Hanson", "Adam Tacy"],
            "categories": ["Internet", "Java"]
        }, {
            "id": 136,
            "title": "The Quick Python Book",
            "isbn": "1884777740",
            "pageCount": 444,
            "publishedDate": {
                "$date": "1999-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harms.jpg",
            "status": "PUBLISH",
            "authors": ["Daryl Harms", "Kenneth McDonald"],
            "categories": ["Python"]
        }, {
            "id": 137,
            "title": "SharePoint 2010 Site Owner's Manual",
            "isbn": "1933988754",
            "pageCount": 300,
            "publishedDate": {
                "$date": "2012-02-13T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harryman.jpg",
            "description": "SharePoint 2010 Site Owner's Manual starts by assuming you already have SharePoint installed on your system and are looking for ways to solve the problems you face every day in your organization. You'll learn to determine what type of SharePoint installation you have   Microsoft Office SharePoint Server (MOSS), Windows SharePoint Services (WSS), the \"Fabulous 40\" templates   and what features are at your disposal. Once you know the lay of the land, you'll discover what you can do yourself, when you need to call in some help, and when you should leave it to the developers.",
            "status": "PUBLISH",
            "authors": ["Yvonne M. Harryman"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 139,
            "title": "Java Development with Ant",
            "isbn": "1930110588",
            "pageCount": 672,
            "publishedDate": {
                "$date": "2002-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher.jpg",
            "description": "The most widely used build tool for Java projects, Ant is cross-platform, extensible, simple, and fast. It scales from small personal projects to large, multi-team J2EE projects. And, most important, it's easy to learn.",
            "status": "PUBLISH",
            "authors": ["Erik Hatcher", "Steve Loughran"],
            "categories": ["Java", "Internet"]
        }, {
            "id": 140,
            "title": "Lucene in Action",
            "isbn": "1932394281",
            "pageCount": 456,
            "publishedDate": {
                "$date": "2004-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher2.jpg",
            "status": "PUBLISH",
            "authors": ["Erik Hatcher", "Otis Gospodnetic"],
            "categories": ["Java"]
        }, {
            "id": 141,
            "title": "Lucene in Action, Second Edition",
            "isbn": "1933988177",
            "pageCount": 532,
            "publishedDate": {
                "$date": "2010-07-09T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher3.jpg",
            "description": "With clear writing, reusable examples, and unmatched advice on best practices, Lucene in Action is still the definitive guide to developing with Lucene.",
            "status": "PUBLISH",
            "authors": ["Erik Hatcher", "Otis Gospodnetic", "", "Michael McCandless"],
            "categories": ["Java", "Open Source"]
        }, {
            "id": 142,
            "title": "PowerBuilder 6.0 Questions & Answers",
            "isbn": "1884777708",
            "pageCount": 446,
            "publishedDate": {
                "$date": "1998-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton.jpg",
            "description": "If you'd like to learn PowerBuilder--or enhance your skills-- this book is for you. Its hands-on approach will show you how to write real code. Each section takes a specific \"How do I \" topic and answers commonly asked questions in an easy-to-understand, conversational manner. It then shows you how the same technique can be used over and over again to decrease your overall code-writing time.",
            "status": "PUBLISH",
            "authors": ["Tim Hatton"],
            "categories": ["PowerBuilder"]
        }, {
            "id": 143,
            "title": "The Awesome Power of PowerJ",
            "isbn": "1884777538",
            "pageCount": 378,
            "publishedDate": {
                "$date": "1998-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton2.jpg",
            "description": "The Awesome Power of PowerJ shows you how you can write Java programs the very first day with PowerJ, even if you don't know Java. Through a hands-on approach that makes liberal use of figures and code snippets, you will learn how to use PowerJ to build effective Java applets and applications.",
            "status": "PUBLISH",
            "authors": ["Tim Hatton"],
            "categories": ["Java"]
        }, {
            "id": 144,
            "title": "The Awesome Power of Power++",
            "isbn": "1884777546",
            "pageCount": 416,
            "publishedDate": {
                "$date": "1998-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton3.jpg",
            "description": "The Awesome Power of Power++ is for the beginning to intermediate Power++ programmer. It assumes that you have little or no knowledge of the C++ language but that you do know programming constructs. The purpose is to teach you how to use Power++ to build C++ applets and applications even if you are not a C++ expert. To this end it takes a hands-on approach and makes liberal use of figures and code snippets.",
            "status": "PUBLISH",
            "authors": ["Tim Hatton"],
            "categories": ["PowerBuilder"]
        }, {
            "id": 145,
            "title": "Azure in Action",
            "isbn": "193518248X",
            "pageCount": 425,
            "publishedDate": {
                "$date": "2010-10-22T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hay.jpg",
            "description": "Azure in Action is a fast-paced tutorial intended for architects and developers looking to develop on Windows Azure and the Windows Azure Platform. It's designed both for readers new to cloud concepts and for those familiar with cloud development but new to Azure. After a quick walk through the basics, it guides you all the way from your first app through more advanced concepts of the Windows Azure Platform.",
            "status": "PUBLISH",
            "authors": ["Chris Hay", "Brian H. Prince"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 146,
            "title": "Distributed Agile in Action",
            "isbn": "1935182412",
            "pageCount": 325,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hazrati.jpg",
            "description": "Distributed Agile in Action is the first book to directly address the unique task of going Agile in a distributed team. Rather than rehashing Agile theories, this book supplies the practical examples and step by step advice you need to help your distributed teams adopt and embrace Agile principles. It's a distilled and carefully organized learning aid for working in a distributed Agile environment, with in-depth focus on how to approach three critical components of development-People, Process and Technology.",
            "status": "MEAP",
            "authors": ["Vikas Hazrati", "Balaji D Loganathan"],
            "categories": ["Software Engineering"]
        }, {
            "id": 147,
            "title": "Metaprogramming in .NET",
            "isbn": "1617290262",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-12-31T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hazzard.jpg",
            "status": "PUBLISH",
            "authors": ["Kevin Hazzard", "Jason Bock"],
            "categories": ["Microsoft/.NET"]
        }, {
            "id": 148,
            "title": "Portlets and Apache Portals",
            "pageCount": 500,
            "publishedDate": {
                "$date": "2005-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hepper.jpg",
            "description": "Portlets and Apache Portals was not published by Manning, but the manuscript is available for download from our website \"as is.\"",
            "status": "PUBLISH",
            "authors": ["Stefan Hepper", "Peter Fischer", "Stephan Hesmer", "Richard Jacob", "David Sean Taylor"],
            "categories": ["Java"]
        }, {
            "id": 149,
            "title": "Code Generation in Action",
            "isbn": "1930110979",
            "pageCount": 350,
            "publishedDate": {
                "$date": "2003-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/herrington.jpg",
            "description": "Code Generation In Action covers building database access, user interface, remote procedure, test cases, and business logic code as well as code for other key system functions.",
            "status": "PUBLISH",
            "authors": ["Jack Herrington"],
            "categories": ["Programming"]
        }, {
            "id": 150,
            "title": "Illustrated Guide to HTTP",
            "isbn": "138582262",
            "pageCount": 400,
            "publishedDate": {
                "$date": "1997-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hethmon.jpg",
            "status": "PUBLISH",
            "authors": ["Paul S. Hethmon"],
            "categories": ["Internet"]
        }, {
            "id": 152,
            "title": "Agile ALM",
            "isbn": "1935182633",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2011-08-20T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/huettermann.jpg",
            "description": "Many software projects fail unnecessarily because of unclear objectives, redundant and unproductive work, cost overruns, and a host of other avoidable process problems. In response, agile processes and lightweight tooling have begun to replace traditional engineering processes throughout the development lifecycle. An agile approach to application lifecycle management improves product quality, reduces time to market, and makes for happier developers.    Agile ALM is a guide for Java developers who want to integrate flexible agile practices and lightweight tooling along all phases of the software development process. The book introduces a new vision for managing change in requirements and process more efficiently and flexibly. You'll learn powerful practices like task-based Development, where you align activities into tasks resulting in traceable artifacts, Continuous Integration, in which you frequently and systematically integrate, build, and test an application in development and using Scrum as an agile approach to release management. The effect is a more comprehensive and practical approach to build, configuration, deployment, release, test, quality, integration, and requirements management.    This book synthesizes technical and functional elements to provide a comprehensive approach to software development. You'll learn to see the whole scope of the development process as a set of defined tasks, many of which are repeated daily, and then master the tools and practices you need to accomplish each of those tasks efficiently.    Because efficient tool chains can radically improve the speed and fluidity of the development process, this book demonstrates how to integrate state-of-the-art lightweight tools. Many of the tools and examples are Java-based, but the Agile ALM principles apply to all development platforms. As well, the many examples show how you can bridge different languages and systems.",
            "status": "PUBLISH",
            "authors": ["Michael Hüttermann"],
            "categories": ["Software Engineering"]
        }, {
            "id": 153,
            "title": "Java Network Programming, Second Edition",
            "isbn": "188477749X",
            "pageCount": 860,
            "publishedDate": {
                "$date": "1999-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hughes.jpg",
            "status": "PUBLISH",
            "authors": ["Merlin Hughes", "Michael Shoffner", "", "Derek Hamner"],
            "categories": ["Java"]
        }, {
            "id": 154,
            "title": "Struts in Action",
            "isbn": "1932394249",
            "pageCount": 672,
            "publishedDate": {
                "$date": "2002-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/husted.jpg",
            "status": "PUBLISH",
            "authors": ["Ted N. Husted", "Cedric Dumoulin", "George Franciscus", "David Winterfeldt"],
            "categories": ["Java", "Internet"]
        }, {
            "id": 155,
            "title": "Camel in Action",
            "isbn": "1935182366",
            "pageCount": 375,
            "publishedDate": {
                "$date": "2011-01-04T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ibsen.jpg",
            "description": "Camel in Action is for developers working with integration of any kind. This highly practical book introduces Camel and shows examples of how to use it with the 45+ supported enterprise integration patterns. Written by the people who wrote the Camel code, it's up to date and distills details and insights that only people deeply involved with Camel could provide.",
            "status": "PUBLISH",
            "authors": ["Claus Ibsen", "Jonathan Anstey"],
            "categories": ["Java"]
        }, {
            "id": 156,
            "title": "Taming Text",
            "isbn": "193398838X",
            "pageCount": 350,
            "publishedDate": {
                "$date": "2012-12-31T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ingersoll.jpg",
            "description": "Taming Text is a hands-on, example-driven guide to working with unstructured text in the context of real-world applications. This book explores how to automatically organize text using approaches such as full-text search, proper name recognition, clustering, tagging, information extraction, and summarization. The book guides you through examples illustrating each of these topics, as well as the foundations upon which they are built.",
            "status": "PUBLISH",
            "authors": ["Grant S. Ingersoll", "Thomas S. Morton", "", "Andrew L. Farris"],
            "categories": ["Software Engineering"]
        }, {
            "id": 158,
            "title": "JBoss in Action",
            "isbn": "1933988029",
            "pageCount": 496,
            "publishedDate": {
                "$date": "2009-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jamae.jpg",
            "status": "PUBLISH",
            "authors": ["Javid Jamae", "Peter Johnson"],
            "categories": ["Java"]
        }, {
            "id": 159,
            "title": "Gnuplot in Action",
            "isbn": "1933988398",
            "pageCount": 400,
            "publishedDate": {
                "$date": "2009-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/janert.jpg",
            "status": "PUBLISH",
            "authors": ["Philipp K. Janert"],
            "categories": ["Computer Graphics"]
        }, {
            "id": 160,
            "title": "Extending and Embedding Perl",
            "isbn": "1930110820",
            "pageCount": 384,
            "publishedDate": {
                "$date": "2002-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jenness.jpg",
            "status": "PUBLISH",
            "authors": ["Tim Jenness", "Simon Cozens"],
            "categories": ["Perl"]
        }, {
            "id": 161,
            "title": "iOS 4 in Action",
            "isbn": "1617290017",
            "pageCount": 504,
            "publishedDate": {
                "$date": "2011-06-09T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jharrington.jpg",
            "description": "iOS 4 in Action, written for Xcode 4, is a detailed, hands-on guide that goes from setting up your development environment, through your first coding steps, all the way to creating a polished, commercial iOS 4 application. You'll run through examples from a variety of areas including a chat client, a video game, an interactive map, and background audio. You'll also learn how the new iOS 4 features apply to your existing iOS 3 based apps. This book will help you become a confident, well-rounded iOS 4 developer.",
            "status": "PUBLISH",
            "authors": ["Jocelyn Harrington", "Brandon Trebitowski", "Christopher Allen", "", "Shannon Appelcline"],
            "categories": ["Mobile Technology"]
        }, {
            "id": 162,
            "title": "Elements of Programming with Perl",
            "isbn": "1884777805",
            "pageCount": 368,
            "publishedDate": {
                "$date": "1999-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/johnson.jpg",
            "status": "PUBLISH",
            "authors": ["Andrew L. Johnson"],
            "categories": ["Perl"]
        }, {
            "id": 163,
            "title": "Learn Windows PowerShell in a Month of Lunches",
            "isbn": "1617290211",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2011-04-15T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones.jpg",
            "description": "Learn Windows PowerShell in a Month of Lunches is an innovative tutorial designed for busy administrators. Author Don Jones has taught thousands of administrators to use PowerShell, and now he'll teach you, bringing his years of training techniques to a concise, easy-to-follow book. Just set aside one hour a day   lunchtime would be perfect   for an entire month, and you'll be automating administrative tasks faster than you ever thought possible. Don combines his own in-the-trenches experience with years of PowerShell instruction to deliver the most important, effective, and engaging elements of PowerShell to you quickly and painlessly, setting you on the path to a career-boosting future.",
            "status": "PUBLISH",
            "authors": ["Don Jones"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 164,
            "title": "R in Action",
            "isbn": "1935182390",
            "pageCount": 375,
            "publishedDate": {
                "$date": "2011-08-15T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kabacoff.jpg",
            "description": "R in Action is the first book to present both the R system and the use cases that make it such a compelling package for business developers. The book begins by introducing the R language, including the development environment. As you work through various examples illustrating R's features, you'll also get a crash course in practical statistics, including basic and advanced models for normal and non-normal data, longitudinal and survival data, and a wide variety of multivariate methods. Both data mining methodologies and approaches to messy and incomplete data are included.",
            "status": "PUBLISH",
            "authors": ["Robert I. Kabacoff"],
            "categories": ["Software Engineering"]
        }, {
            "id": 165,
            "title": "Android in Practice",
            "isbn": "9781935182924",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kaeppler.jpg",
            "status": "MEAP",
            "authors": ["Matthias Kaeppler", "Michael D. Galpin", "Charlie Collins"],
            "categories": ["Mobile Technology"]
        }, {
            "id": 167,
            "title": "SOA Security",
            "isbn": "1932394680",
            "pageCount": 512,
            "publishedDate": {
                "$date": "2007-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kanneganti.jpg",
            "status": "PUBLISH",
            "authors": ["Ramarao Kanneganti", "Prasad A. Chodavarapu"],
            "categories": ["Software Engineering"]
        }, {
            "id": 168,
            "title": "Rails 3 in Action",
            "isbn": "1935182277",
            "pageCount": 425,
            "publishedDate": {
                "$date": "2011-09-20T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/katz.jpg",
            "description": "Rails 3 in Action will provide a thorough introduction to Ruby-based web development using Rails. Like Rails 3 itself, this book combines Merb and Rails in the form of authors Yehuda Katz, Merb Lead Developer.",
            "status": "PUBLISH",
            "authors": ["Ryan Bigg", "Yehuda Katz"],
            "categories": ["Internet"]
        }, {
            "id": 169,
            "title": "Continuous Integration in .NET",
            "isbn": "1935182552",
            "pageCount": 328,
            "publishedDate": {
                "$date": "2011-03-14T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kawalerowicz.jpg",
            "description": "Continuous Integration in .NET is a tutorial for developers and team leads that teaches you to reimagine your development strategy by creating a consistent continuous integration process. This book shows you how to build on the tools you already know--.NET Framework and Visual Studio and to use powerful software like MSBuild, Subversion, TFS 2010, Team City, CruiseControl.NET, NUnit, and Selenium.",
            "status": "PUBLISH",
            "authors": ["Marcin Kawalerowicz", "Craig Berntson"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 170,
            "title": "Technology Paradise Lost",
            "isbn": "1932394133",
            "pageCount": 260,
            "publishedDate": {
                "$date": "2004-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/keller.jpg",
            "description": "In Technology Paradise Lost Keller describes how the new thinking is working inside some of the country's most complex and successful organizations, including Merrill Lynch, JetBlue, Harrah's, and Motorola which have cut IT spending to gain a competitive edge, and experienced marked gains to their bottom lines.",
            "status": "PUBLISH",
            "authors": ["Erik Keller"],
            "categories": ["Business"]
        }, {
            "id": 172,
            "title": "Kermit 95+",
            "isbn": "1930110057",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2003-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kermit.jpg",
            "status": "PUBLISH",
            "authors": ["Kermit Project at Columbia University"],
            "categories": ["Internet", "Networking", "Miscella"]
        }, {
            "id": 173,
            "title": "Laszlo in Action",
            "isbn": "1932394834",
            "pageCount": 552,
            "publishedDate": {
                "$date": "2008-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/klein.jpg",
            "status": "PUBLISH",
            "authors": ["Norman Klein", "Max Carlson with Glenn MacEwen"],
            "categories": ["Web Development"]
        }, {
            "id": 174,
            "title": "Groovy in Action",
            "isbn": "1932394842",
            "pageCount": 696,
            "publishedDate": {
                "$date": "2007-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/koenig.jpg",
            "status": "PUBLISH",
            "authors": ["Dierk Koenig with Andrew Glover", "Paul King", "Guillaume Laforge", "Jon Skeet"],
            "categories": ["Java"]
        }, {
            "id": 175,
            "title": "Groovy in Action, Second Edition",
            "isbn": "1935182447",
            "pageCount": 700,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/koenig2.jpg",
            "description": "Groovy in Action, Second Edition is a thoroughly-revised, comprehensive guide to Groovy programming. It introduces Java developers to the dynamic features that Groovy provides, and shows you how to apply Groovy to a range of tasks including building new apps, integration with existing code, and DSL development.",
            "status": "MEAP",
            "authors": ["Dierk König", "Guillaume Laforge", "Paul King", "Cédric Champeau", "Hamlet D'Arcy", "Erik Pragt", "", "Jon Skeet"],
            "categories": ["Java"]
        }, {
            "id": 176,
            "title": "Object Technology Centers of Excellence",
            "isbn": "132612313",
            "pageCount": 200,
            "publishedDate": {
                "$date": "1996-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/korson.jpg",
            "description": "Object Technology Centers of Excellence provides guidance to those charged with managing the shift to object technology. It is the only book on the market aimed not at the project level but at the corporate level, with a focus on the infrastructures necessary for a successful transition.",
            "status": "PUBLISH",
            "authors": ["Timothy D. Korson", "Vijay K. Vaishnavi"],
            "categories": ["Object-Technology Programming", ""]
        }, {
            "id": 177,
            "title": "Test Driven",
            "isbn": "1932394850",
            "pageCount": 544,
            "publishedDate": {
                "$date": "2007-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/koskela.jpg",
            "status": "PUBLISH",
            "authors": ["Lasse Koskela"],
            "categories": ["Software Engineering"]
        }, {
            "id": 178,
            "title": "Effective Unit Testing",
            "isbn": "1935182579",
            "pageCount": 350,
            "publishedDate": {
                "$date": "2013-02-04T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/koskela2.jpg",
            "status": "PUBLISH",
            "authors": ["Lasse Koskela"],
            "categories": ["Java"]
        }, {
            "id": 179,
            "title": "Making Java Groovy",
            "isbn": "1935182943",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-09-19T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kousen.jpg",
            "description": "Making Java Groovy is a practical handbook for developers who want to blend Groovy into their day-to-day work with Java. It starts by introducing the key differences between Java and Groovy   and how you can use them to your advantage. Then, it guides you step-by-step through realistic development challenges, from web applications to web services to desktop applications, and shows how Groovy makes them easier to put into production.",
            "status": "PUBLISH",
            "authors": ["Kenneth A. Kousen"],
            "categories": ["Java"]
        }, {
            "id": 180,
            "title": "The Awesome Power of Direct3D/DirectX",
            "isbn": "1884777473",
            "pageCount": 840,
            "publishedDate": {
                "$date": "2002-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kovach.jpg",
            "description": "The Awesome Power of Direct3D/DirectX shows you how to build a complete working 3D application, including 3D sound, joystick input, animation, textures, shadows, and even collision detection.",
            "status": "PUBLISH",
            "authors": ["Peter J. Kovach"],
            "categories": ["Computer Graphics"]
        }, {
            "id": 181,
            "title": "Practical Software Requirements",
            "isbn": "1884777597",
            "pageCount": 448,
            "publishedDate": {
                "$date": "1998-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kovitz.jpg",
            "status": "PUBLISH",
            "authors": ["Benjamin L. Kovitz"],
            "categories": ["Software Engineering", "Theory"]
        }, {
            "id": 182,
            "title": "NHibernate in Action",
            "isbn": "1932394923",
            "pageCount": 400,
            "publishedDate": {
                "$date": "2009-02-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kuate.jpg",
            "status": "PUBLISH",
            "authors": ["Pierre Henri Kuate", "Tobin Harris", "Christian Bauer", "", "Gavin King"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 183,
            "title": "Microsoft Reporting Services in Action",
            "isbn": "1932394222",
            "pageCount": 656,
            "publishedDate": {
                "$date": "2004-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lachev.jpg",
            "status": "PUBLISH",
            "authors": ["Teo Lachev"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 184,
            "title": "AspectJ in Action",
            "isbn": "1930110936",
            "pageCount": 512,
            "publishedDate": {
                "$date": "2003-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laddad.jpg",
            "status": "PUBLISH",
            "authors": ["Ramnivas Laddad"],
            "categories": ["Java"]
        }, {
            "id": 185,
            "title": "AspectJ in Action, Second Edition",
            "isbn": "1933988053",
            "pageCount": 568,
            "publishedDate": {
                "$date": "2009-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laddad2.jpg",
            "description": "AspectJ in Action, Second Edition is a fully updated, major revision of Ramnivas Laddad's best-selling first edition. It's a hands-on guide for Java developers. After introducing the core principles of AOP, it shows you how to create reusable solutions using AspectJ 6 and Spring 3. You'll master key features including annotation-based syntax, load-time weaver, annotation-based crosscutting, and Spring-AspectJ integration. Building on familiar technologies such as JDBC, Hibernate, JPA, Spring Security, Spring MVC, and Swing, you'll apply AOP to common problems encountered in enterprise applications.",
            "status": "PUBLISH",
            "authors": ["Ramnivas Laddad"],
            "categories": ["Java"]
        }, {
            "id": 186,
            "title": "Hadoop in Action",
            "isbn": "1935182196",
            "pageCount": 325,
            "publishedDate": {
                "$date": "2010-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lam.jpg",
            "description": "Hadoop in Action teaches readers how to use Hadoop and write MapReduce programs. The intended readers are programmers, architects, and project managers who have to process large amounts of data offline. Hadoop in Action will lead the reader from obtaining a copy of Hadoop to setting it up in a cluster and writing data analytic programs.",
            "status": "PUBLISH",
            "authors": ["Chuck Lam"],
            "categories": ["Java"]
        }, {
            "id": 187,
            "title": "SQR in PeopleSoft and Other Applications",
            "isbn": "1884777775",
            "pageCount": 600,
            "publishedDate": {
                "$date": "2003-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/landres.jpg",
            "status": "PUBLISH",
            "authors": ["Galina", "Vlad Landres"],
            "categories": ["Business", "Client-Server"]
        }, {
            "id": 188,
            "title": "SQR in PeopleSoft and Other Applications, Second Edition",
            "isbn": "1932394001",
            "pageCount": 696,
            "publishedDate": {
                "$date": "2003-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/landres2.jpg",
            "status": "PUBLISH",
            "authors": ["Galina Landres", "Vlad Landres"],
            "categories": ["Business", "Client-Server"]
        }, {
            "id": 189,
            "title": "F# in Action",
            "isbn": "1935182250",
            "pageCount": 425,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laucher.jpg",
            "description": "F# in Action introduces the F# language, but it goes well beyond the standard tutorial and reference approach. F# expert Amanda Laucher draws on her extensive experience deploying F#-based solutions to show you how to use F# in real, day-to-day work.",
            "status": "MEAP",
            "authors": ["Amanda Laucher"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 190,
            "title": "Tuscany SCA in Action",
            "isbn": "1933988894",
            "pageCount": 472,
            "publishedDate": {
                "$date": "2011-02-12T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laws.jpg",
            "description": "Tuscany in Action is a comprehensive, hands-on guide for developing technology agnostic, extensible applications using Apache Tuscany's lightweight SCA infrastructure. The book uses practical examples based on a travel booking scenario to demonstrate how to develop applications with Tuscany SCA. Apache Tuscany supports a variety of programming environments, data bindings and communication protocols \"out of the box\" and can be easily extended to support other technologies.",
            "status": "PUBLISH",
            "authors": ["Simon Laws", "Mark Combellack", "Raymond Feng", "Haleh Mahbod", "Simon Nash"],
            "categories": ["Java"]
        }, {
            "id": 192,
            "title": "Client/Server Yellow Pages",
            "isbn": "1884777082",
            "pageCount": 280,
            "publishedDate": {
                "$date": "1995-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lewis.jpg",
            "description": "This unique guide covers software products and vendors active in the client/server marketplace. Over 200 products and over 250 vendors are included.",
            "status": "PUBLISH",
            "authors": ["Compiled", "introduced by Ted Lewis"],
            "categories": ["Client-Server"]
        }, {
            "id": 193,
            "title": "Object Oriented Application Frameworks",
            "isbn": "1884777066",
            "pageCount": 352,
            "publishedDate": {
                "$date": "1995-04-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lewis2.jpg",
            "description": "Frameworks are object-oriented programming environments for vertical application areas. This book is the first to survey this exciting new technology, its concepts, and practical applications.",
            "status": "PUBLISH",
            "authors": ["Ted Lewis", "friends"],
            "categories": ["Object-Oriented Programming"]
        }, {
            "id": 194,
            "title": "Tapestry in Action",
            "isbn": "1932394117",
            "pageCount": 580,
            "publishedDate": {
                "$date": "2004-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lewisship.jpg",
            "status": "PUBLISH",
            "authors": ["Howard M. Lewis Ship"],
            "categories": ["Java", "Internet"]
        }, {
            "id": 195,
            "title": "WebWork in Action",
            "isbn": "1932394532",
            "pageCount": 400,
            "publishedDate": {
                "$date": "2005-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lightbody.jpg",
            "status": "PUBLISH",
            "authors": ["Patrick Lightbody", "Jason Carreira"],
            "categories": ["internet"]
        }, {
            "id": 196,
            "title": "MacRuby in Action",
            "isbn": "1935182498",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-04-11T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lim.jpg",
            "status": "PUBLISH",
            "authors": ["Brendan G. Lim with Jerry Cheung", "Jeremy McAnally"],
            "categories": ["Programming"]
        }, {
            "id": 197,
            "title": "Erlang and OTP in Action",
            "isbn": "1933988789",
            "pageCount": 500,
            "publishedDate": {
                "$date": "2010-11-16T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/logan.jpg",
            "description": "Erlang and OTP in Action teaches you to apply Erlang's shared-state model for concurrent programming--a completely different way of tackling the problem of parallel programming from the more common multi-threaded approach. This book walks you through the practical considerations and steps of building systems in Erlang and integrating them with real-world C/C++, Java, and .NET applications. Unlike other books on the market, Erlang and OTP in Action offers a comprehensive view of how concurrency relates to SOA and web technologies.",
            "status": "PUBLISH",
            "authors": ["Martin Logan", "Eric Merritt", "", "Richard Carlsson"],
            "categories": ["Programming"]
        }, {
            "id": 198,
            "title": "SharePoint 2007 Developer's Guide to Business Data Catalog",
            "isbn": "1933988819",
            "pageCount": 304,
            "publishedDate": {
                "$date": "2009-09-09T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lonsdale.jpg",
            "description": "SharePoint 2007 Developer's Guide to Business Data Catalog is a practical, example-rich guide to the features of the BDC and the techniques you need to build solutions for end users. The book starts with the basics   what the BDC is, what you can do with it, and how to pull together a BDC solution. With the fundamentals in hand, it explores the techniques and ideas you need to put BDC into use effectively in your organization.",
            "status": "PUBLISH",
            "authors": ["Brett Lonsdale", "Nick Swan"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 199,
            "title": "Doing IT Right",
            "isbn": "133964256",
            "pageCount": 350,
            "publishedDate": {
                "$date": "1995-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lorin.jpg",
            "description": "Doing IT Right explores IT in its full complexity. It explains fundamental issues of hardware and software structures; it illuminates central issues of networking and encapsulates the essence of client/server computing; its coverage of costing, risk assessment, and due diligence in making computing decisions is unique.",
            "status": "PUBLISH",
            "authors": ["Harold Lorin"],
            "categories": ["Business", "Software Engineering"]
        }, {
            "id": 200,
            "title": "Adobe AIR in Action",
            "isbn": "1933988487",
            "pageCount": 336,
            "publishedDate": {
                "$date": "2008-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lott.jpg",
            "status": "PUBLISH",
            "authors": ["Joey Lott", "Kathryn Rotondo", "Sam Ahn", "Ashley Atkins"],
            "categories": ["Web Development"]
        }, {
            "id": 201,
            "title": "Ant in Action",
            "isbn": "193239480X",
            "pageCount": 600,
            "publishedDate": {
                "$date": "2007-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/loughran.jpg",
            "description": "The most widely used build tool for Java projects, Ant is cross-platform, extensible, simple, and fast. It scales from small personal projects to large, multi-team enterprise projects. And, most important, it   s easy to learn.",
            "status": "PUBLISH",
            "authors": ["Steve Loughran", "Erik Hatcher"],
            "categories": ["Java"]
        }, {
            "id": 202,
            "title": "Restlet in Action",
            "isbn": "193518234X",
            "pageCount": 450,
            "publishedDate": {
                "$date": "2012-09-26T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/louvel.jpg",
            "description": "Restlet in Action gets you started with the Restlet Framework and the REST architecture style. You'll create and deploy applications in record time while learning to use popular RESTful Web APIs effectively. This book looks at the many faces of web development, including server- and client-side, along with cloud computing, mobile Android devices, and semantic web applications. It offers a particular focus on Google's innovative Google Web Toolkit, Google App Engine, and Android technologies.",
            "status": "PUBLISH",
            "authors": ["Jerome Louvel", "Thierry Boileau", "", "Philippe Mougin"],
            "categories": ["Internet"]
        }, {
            "id": 203,
            "title": "iText in Action",
            "isbn": "1932394796",
            "pageCount": 688,
            "publishedDate": {
                "$date": "2006-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lowagie.jpg",
            "description": "\"I've been using iText for over a year, but I still learnt an awful lot while reading this book.\" --JavaLobby",
            "status": "PUBLISH",
            "authors": ["Bruno Lowagie"],
            "categories": ["Web Development"]
        }, {
            "id": 204,
            "title": "iText in Action, Second Edition",
            "isbn": "1935182617",
            "pageCount": 600,
            "publishedDate": {
                "$date": "2010-11-22T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lowagie2.jpg",
            "description": "iText in Action, Second Edition offers an introduction and a practical guide to iText and the internals of PDF. While at the entry level iText is easy to learn, there's an astonishing range of things you can do once you dive below the surface. This book lowers the learning curve and, though numerous innovative and practical examples, unlocks the secrets hidden in Adobe's PDF Reference. The examples are in Java but they can be easily adapted to .NET using one of iText's .NET ports: iTextSharp or iText.NET.",
            "status": "PUBLISH",
            "authors": ["Bruno Lowagie"],
            "categories": ["Java"]
        }, {
            "id": 205,
            "title": "Power-3D",
            "isbn": "138412146",
            "pageCount": 550,
            "publishedDate": {
                "$date": "1997-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lussier.jpg",
            "status": "PUBLISH",
            "authors": ["Kyle Lussier"],
            "categories": ["Computer Graphics"]
        }, {
            "id": 206,
            "title": "SNA and TCP/IP Enterprise Networking",
            "isbn": "131271687",
            "pageCount": 540,
            "publishedDate": {
                "$date": "1997-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lynch.jpg",
            "description": "SNA and TCP/IP Enterprise Networking shows the reader how enterprise networking evolved, what approaches and techniques can be used today, and where tomorrow's trends lie, illustrating among others Web-to-SNA connectivity and Java based integration approaches.",
            "status": "PUBLISH",
            "authors": ["Daniel C. Lynch", "James P. Gray", "and Edward Rabinovitch", "editors"],
            "categories": ["Software Engineering", "Theory"]
        }, {
            "id": 208,
            "title": "Subversion in Action",
            "isbn": "1932394478",
            "pageCount": 356,
            "publishedDate": {
                "$date": "2004-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/machols.jpg",
            "description": "Learn all about this new open source version control application and why it is replacing CVS as the standard. Examples demonstrate how to customize features to deal with day-to-day problems.",
            "status": "PUBLISH",
            "authors": ["Jeffrey Machols"],
            "categories": ["Java"]
        }, {
            "id": 209,
            "title": "Minimal Perl",
            "isbn": "1932394508",
            "pageCount": 504,
            "publishedDate": {
                "$date": "2006-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/maher.jpg",
            "status": "PUBLISH",
            "authors": ["Tim Maher"],
            "categories": ["Perl"]
        }, {
            "id": 210,
            "title": "Distributed Programming with Java",
            "isbn": "1884777651",
            "pageCount": 320,
            "publishedDate": {
                "$date": "1999-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mahmoud.jpg",
            "status": "PUBLISH",
            "authors": ["Qusay H. Mahmoud"],
            "categories": ["Java"]
        }, {
            "id": 211,
            "title": "Comprehensive Networking Glossary and Acronym Guide",
            "isbn": "013319955X",
            "pageCount": 208,
            "publishedDate": {
                "$date": "1995-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/malkin.jpg",
            "description": "This glossary offers a complete collection of technical terms and acronyms used in the networking industry.",
            "status": "PUBLISH",
            "authors": ["Gary Scott Malkin"],
            "categories": ["Internet"]
        }, {
            "id": 212,
            "title": "JavaServer Faces in Action",
            "isbn": "1932394125",
            "pageCount": 744,
            "publishedDate": {
                "$date": "2004-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mann.jpg",
            "status": "PUBLISH",
            "authors": ["Kito D. Mann"],
            "categories": ["Java"]
        }, {
            "id": 213,
            "title": "LINQ in Action",
            "isbn": "1933988169",
            "pageCount": 576,
            "publishedDate": {
                "$date": "2008-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/marguerie.jpg",
            "status": "PUBLISH",
            "authors": ["Fabrice Marguerie", "Steve Eichert", "Jim Wooley"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 214,
            "title": "Internet BBSs",
            "isbn": "132869985",
            "pageCount": 400,
            "publishedDate": {
                "$date": "1996-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mark.jpg",
            "description": "Internet BBSs: A Guided Tour provides in-depth coverage of the new world of true BBSs now available world-wide. It is a valuable resource for anyone currently using the Internet.",
            "status": "PUBLISH",
            "authors": ["Richard Scott Mark"],
            "categories": ["Internet"]
        }, {
            "id": 215,
            "title": "Algorithms of the Intelligent Web",
            "isbn": "1933988665",
            "pageCount": 368,
            "publishedDate": {
                "$date": "2009-05-29T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/marmanis.jpg",
            "status": "PUBLISH",
            "authors": ["Haralambos Marmanis", "Dmitry Babenko"],
            "categories": ["Web Development"]
        }, {
            "id": 216,
            "title": "JUnit in Action",
            "isbn": "1930110995",
            "pageCount": 384,
            "publishedDate": {
                "$date": "2003-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/massol.jpg",
            "status": "PUBLISH",
            "authors": ["Vincent Massol with Ted Husted"],
            "categories": ["Java"]
        }, {
            "id": 217,
            "title": "Tika in Action",
            "isbn": "1935182854",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2011-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mattmann.jpg",
            "status": "PUBLISH",
            "authors": ["Chris A. Mattmann", "Jukka L. Zitting"],
            "categories": ["Java"]
        }, {
            "id": 218,
            "title": "Ruby in Practice",
            "isbn": "1933988479",
            "pageCount": 360,
            "publishedDate": {
                "$date": "2009-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mcanally.jpg",
            "status": "PUBLISH",
            "authors": ["Jeremy McAnally", "Assaf Arkin"],
            "categories": ["Programming"]
        }, {
            "id": 219,
            "title": "Inside LotusScript",
            "isbn": "1884777481",
            "pageCount": 420,
            "publishedDate": {
                "$date": "1997-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mcginn.jpg",
            "description": "Develop Notes and Domino Web applications by providing advanced LotusScript code for direct use in your programs. This book emphasizes practical, useable code and solutions to common Notes programming problems.",
            "status": "PUBLISH",
            "authors": ["Joe McGinn"],
            "categories": ["Business"]
        }, {
            "id": 220,
            "title": "Maximum MIDI",
            "isbn": "1884777449",
            "pageCount": 450,
            "publishedDate": {
                "$date": "1997-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/messick.jpg",
            "status": "PUBLISH",
            "authors": ["Paul Messick"],
            "categories": ["Programming"]
        }, {
            "id": 221,
            "title": "Planning and Managing ATM Networks",
            "isbn": "132621894",
            "pageCount": 320,
            "publishedDate": {
                "$date": "1997-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/minoli.jpg",
            "description": "Planning and Managing ATM Networks covers strategic planning, initial deployment, overall management, and the day-to-day operation of ATM networks.",
            "status": "PUBLISH",
            "authors": ["Daniel Minoli", "Thomas W. Golway", "", "Norris P. Smith"],
            "categories": ["Client-Server", "Networking"]
        }, {
            "id": 222,
            "title": "Client/Server Applications on ATM Networks",
            "isbn": "137353006",
            "pageCount": 350,
            "publishedDate": {
                "$date": "1997-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/minoli2.jpg",
            "description": "Client/Server Appliactions on ATM Networks discusses ATM as the key technology for transforming the enterprise network from data-only to an integrated data, voice, video, image and multimedia corporate infrastructure.",
            "status": "PUBLISH",
            "authors": ["Daniel Minoli", "Andrew Schmidt"],
            "categories": ["Client-Server", "Networking"]
        }, {
            "id": 223,
            "title": "JavaFX in Action",
            "isbn": "1933988991",
            "pageCount": 373,
            "publishedDate": {
                "$date": "2009-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/morris.jpg",
            "status": "PUBLISH",
            "authors": ["Simon Morris"],
            "categories": ["Java"]
        }, {
            "id": 224,
            "title": "Entity Framework 4 in Action",
            "isbn": "1935182188",
            "pageCount": 576,
            "publishedDate": {
                "$date": "2011-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mostarda.jpg",
            "description": "Microsoft Entity Framework in Action introduces the Entity Framework to developers working in .NET who already have some knowledge of ADO.NET. The book begins with a review of the core ideas behind the ORM model and shows how Entity Framework offers a smooth transition from a traditional ADO.NET approach. By presenting numerous small examples and a couple larger case studies, the book unfolds the Entity Framework story in clear, easy-to-follow detail. The infrastructure and inner workings will be highlighted only when there   s the need to understand a particular feature.",
            "status": "PUBLISH",
            "authors": ["Stefano Mostarda", "Marco De Sanctis", "", "Daniele Bochicchio"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 225,
            "title": "ASP.NET 2.0 Web Parts in Action",
            "isbn": "193239477X",
            "pageCount": 344,
            "publishedDate": {
                "$date": "2006-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neimke.jpg",
            "description": "\"ASP.NET Web Parts in Action is a must read book for every developer who wants to extend his knowledge of the ASP.NET framework.\" -- Simon Busoli, DotNetSlackers.com",
            "status": "PUBLISH",
            "authors": ["Darren Neimke"],
            "categories": ["Microsoft"]
        }, {
            "id": 226,
            "title": "Sass and Compass in Action",
            "isbn": "1617290149",
            "pageCount": 300,
            "publishedDate": {
                "$date": "2013-07-26T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/netherland.jpg",
            "description": "Sass and Compass in Action is the definitive guide to stylesheet authoring using these two revolutionary tools. Written for both designers and developers, this book demonstrates the power of both Sass and Compass through a series of examples that address common pain points associated with traditional stylesheet authoring. The book begins with simple topics such as CSS resets and moves on to more involved topics such as grid frameworks and CSS3 vendor implementation differences.",
            "status": "PUBLISH",
            "authors": ["Wynn Netherland", "Nathan Weizenbaum", "Chris Eppstein", "", "Brandon Mathis"],
            "categories": ["Web Development"]
        }, {
            "id": 227,
            "title": "Core OWL 5.0",
            "isbn": "1884777503",
            "pageCount": 500,
            "publishedDate": {
                "$date": "1997-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neward.jpg",
            "description": "Core OWL 5.0 dives under the surface and into the OWL source code itself. You'll see what new capabilities OWL 5.0 offers the OWL programmer. You'll gain a deeper understanding of what OWL does on your behalf such as the OWL messaging system and its message maps.",
            "status": "PUBLISH",
            "authors": ["Ted Neward"],
            "categories": ["Programming"]
        }, {
            "id": 228,
            "title": "Advanced OWL 5.0",
            "isbn": "1884777465",
            "pageCount": 570,
            "publishedDate": {
                "$date": "1998-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neward2.jpg",
            "description": "Advanced OWL 5.0 covers advanced ways to make the OWL library do those tricky things you thought weren't possible. You'll get a long, exhaustive look at the new features introduced by the OWL 5.0 code. You'll find detailed explanations of how to extend the OWL objects themselves in new directions.",
            "status": "PUBLISH",
            "authors": ["Ted Neward"],
            "categories": ["Programming"]
        }, {
            "id": 229,
            "title": "Server-Based Java Programming",
            "isbn": "1884777716",
            "pageCount": 592,
            "publishedDate": {
                "$date": "2000-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neward3.jpg",
            "status": "PUBLISH",
            "authors": ["Ted Neward"],
            "categories": ["Java", "Client-Server", "Internet"]
        }, {
            "id": 230,
            "title": "SQL Server MVP Deep Dives",
            "isbn": "1935182048",
            "pageCount": 848,
            "publishedDate": {
                "$date": "2009-11-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nielsen.jpg",
            "description": "SQL Server MVP Deep Dives is organized into five parts: Design and Architecture, Development, Administration, Performance Tuning and Optimization, and Business Intelligence. In each, you'll find concise, brilliantly clear chapters that take on key topics like mobile data strategies, Dynamic Management Views, or query performance.",
            "status": "PUBLISH",
            "authors": ["Contributions from 53 SQL Server MVPs", "Edited by Paul Nielsen", "Kalen Delaney", "Greg Low", "Adam Machanic", "Paul S. Randal", "", "Kimberly L. Tripp"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 231,
            "title": "SQL Server MVP Deep Dives",
            "isbn": "9781935182047",
            "pageCount": 848,
            "publishedDate": {
                "$date": "2009-11-15T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nielsenaw.jpg",
            "description": "SQL Server MVP Deep Dives is organized into five parts: Design and Architecture, Development, Administration, Performance Tuning and Optimization, and Business Intelligence. In each, you'll find concise, brilliantly clear chapters that take on key topics like mobile data strategies, Dynamic Management Views, or query performance.",
            "status": "PUBLISH",
            "authors": ["Contributions from 53 SQL Server MVPs; Edited by Paul Nielsen", "Kalen Delaney", "Greg Low", "Adam Machanic", "Paul S. Randal", "", "Kimberly L. Tripp"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 232,
            "title": "SQL Server MVP Deep Dives",
            "isbn": "9781935182047",
            "pageCount": 848,
            "publishedDate": {
                "$date": "2009-11-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nielsonaw.jpg",
            "status": "PUBLISH",
            "authors": ["Paul Nielsen", "Kalen Delaney", "Greg Low", "Adam Machanic", "Paul S. Randal", "", "Kimberly L. Tripp"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 233,
            "title": "PostGIS in Action",
            "isbn": "1935182269",
            "pageCount": 325,
            "publishedDate": {
                "$date": "2011-04-11T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/obe.jpg",
            "description": "PostGIS in Action is the first book devoted entirely to PostGIS. It will help both new and experienced users write spatial queries to solve real-world problems. For those with experience in more traditional relational databases, this book provides a background in vector-based GIS so you can quickly move to analyzing, viewing, and mapping data.",
            "status": "PUBLISH",
            "authors": ["Regina O. Obe", "Leo S. Hsu"],
            "categories": ["Internet"]
        }, {
            "id": 235,
            "title": "Programming Mac OS X",
            "isbn": "1930110855",
            "pageCount": 384,
            "publishedDate": {
                "$date": "2003-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/omalley.jpg",
            "description": "\"...an effective guide for Unix developers who want accurate information specifically on getting up to speed with Mac OS X and its software development environment, without having to sort through the morass of online information overload. ...If you've been a little skittish about Interface Builder, forget your worries now because the tutorial in the book is very good. ...The projects and examples are thorough and should provide even the most jaded intermediate programmer with a real taste of how challenging and satisfying it can be to code for OSX.\" - KickStartNews.com",
            "status": "PUBLISH",
            "authors": ["Kevin O'Malley"],
            "categories": ["Programming"]
        }, {
            "id": 236,
            "title": "The Art of Unit Testing",
            "isbn": "1933988274",
            "pageCount": 320,
            "publishedDate": {
                "$date": "2009-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/osherove.jpg",
            "status": "PUBLISH",
            "authors": ["Roy Osherove"],
            "categories": ["Software Engineering"]
        }, {
            "id": 237,
            "title": "Mahout in Action",
            "isbn": "1935182684",
            "pageCount": 375,
            "publishedDate": {
                "$date": "2011-10-05T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/owen.jpg",
            "status": "PUBLISH",
            "authors": ["Sean Owen", "Robin Anil", "Ted Dunning", "", "Ellen Friedman"],
            "categories": ["Java"]
        }, {
            "id": 238,
            "title": "ASP.NET MVC in Action",
            "isbn": "1933988622",
            "pageCount": 392,
            "publishedDate": {
                "$date": "2009-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/palermo.jpg",
            "description": "ASP.NET MVC in Action is a guide to pragmatic MVC-based web development. After a thorough overview, it dives into issues of architecture and maintainability. The book assumes basic knowledge of ASP.NET (v. 3.5) and expands your expertise.",
            "status": "PUBLISH",
            "authors": ["Jeffrey Palermo", "Ben Scheirman", "", "Jimmy Bogard"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 239,
            "title": "ASP.NET MVC 2 in Action",
            "isbn": "193518279X",
            "pageCount": 432,
            "publishedDate": {
                "$date": "2010-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/palermo2.jpg",
            "description": "ASP.NET MVC 2 in Action is a fast-paced tutorial designed to introduce the MVC model to ASP.NET developers and show how to apply it effectively. After a high-speed ramp up, the book presents over 25 concise chapters exploring key topics like validation, routing, and data access. Each topic is illustrated with its own example so it's easy to dip into the book without reading in sequence. This book covers some high-value, high-end techniques you won't find anywhere else!",
            "status": "PUBLISH",
            "authors": ["Jeffrey Palermo", "Ben Scheirman", "Jimmy Bogard", "Eric Hexter", "", "Matthew Hinze"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 240,
            "title": "ASP.NET MVC 4 in Action",
            "isbn": "1617290416",
            "pageCount": 450,
            "publishedDate": {
                "$date": "2012-05-25T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/palermo3.jpg",
            "description": "SP.NET MVC 3 in Action is a fast-paced tutorial designed to introduce ASP.NET MVC to .NET developers and show how to apply it effectively. After a high-speed ramp up, the book explores key topics like validation, routing, and data access. Each topic is illustrated with its own example so it's easy to dip into the book without reading in sequence. This book also covers some high-value, high-end techniques you won't find anywhere else!",
            "status": "PUBLISH",
            "authors": ["Jeffrey Palermo", "Jimmy Bogard", "Eric Hexter", "Matthew Hinze", "", "Jeremy Skinner"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 241,
            "title": "EJB 3 in Action",
            "isbn": "1933988347",
            "pageCount": 712,
            "publishedDate": {
                "$date": "2007-04-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/panda.jpg",
            "status": "PUBLISH",
            "authors": ["Debu Panda", "Reza Rahman", "Derek Lane"],
            "categories": ["Java"]
        }, {
            "id": 242,
            "title": "EJB 3 in Action, Second Edition",
            "isbn": "1935182994",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-04-07T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/panda2.jpg",
            "description": "Building on the bestselling first edition, EJB 3 in Action, Second Edition tackles EJB 3.1 head-on, through numerous code samples, real-life scenarios, and illustrations. This book is a fast-paced tutorial for Java EE 6 business component development using EJB 3.1, JPA 2 and CDI. Besides covering the basics of EJB 3.1, this book includes in-depth EJB 3.1 internal implementation details, best practices, design patterns, and performance tuning tips. The book also discusses using open source frameworks like Seam and Spring with EJB 3.1.",
            "status": "PUBLISH",
            "authors": ["Debu Panda", "Reza Rahman", "Ryan Cuprak", "", "Michael Remijan"],
            "categories": ["Java"]
        }, {
            "id": 243,
            "title": "Explorer's Guide to the Semantic Web",
            "isbn": "1932394206",
            "pageCount": 304,
            "publishedDate": {
                "$date": "2004-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/passin.jpg",
            "description": "\"A thorough look at one vision of the Web's future ...particularly well written...Highly recommended.\" -- Choice Magazine",
            "status": "PUBLISH",
            "authors": ["Thomas B. Passin"],
            "categories": ["Internet", "Theory", "XML"]
        }, {
            "id": 244,
            "title": "Practical LotusScript",
            "isbn": "1884777767",
            "pageCount": 512,
            "publishedDate": {
                "$date": "1999-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/patton.jpg",
            "status": "PUBLISH",
            "authors": ["Anthony Patton"],
            "categories": ["Business"]
        }, {
            "id": 245,
            "title": "Domino Development with Java",
            "isbn": "1930110049",
            "pageCount": 467,
            "publishedDate": {
                "$date": "2000-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/patton2.jpg",
            "status": "PUBLISH",
            "authors": ["Anthony Patton"],
            "categories": ["Java"]
        }, {
            "id": 246,
            "title": "Windows PowerShell in Action",
            "isbn": "1932394907",
            "pageCount": 576,
            "publishedDate": {
                "$date": "2007-02-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/payette.jpg",
            "description": "   If all it had going for it was the authoratative pedigree of the writer, it might be worth it, but it's also well-written, well-organized, and thorough, which I think makes it invaluable as both a learning tool and a reference.       Slashdot.org",
            "status": "PUBLISH",
            "authors": ["Bruce Payette"],
            "categories": ["Microsoft"]
        }, {
            "id": 247,
            "title": "Windows PowerShell in Action, Second Edition",
            "isbn": "1935182137",
            "pageCount": 700,
            "publishedDate": {
                "$date": "2011-05-15T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/payette2.jpg",
            "description": "Windows PowerShell in Action, Second Edition is a completely revised edition of the best selling book on PowerShell, written by Bruce Payette, one of the founding members of the Windows PowerShell team, co-designer of the PowerShell language, and the principal author of the PowerShell language implementation.    This new edition preserves the crystal-clear introduction to PowerShell, showing sysadmins and developers how to build scripts and utilities to automate system tasks or create powerful system management tools to handle day-to-day tasks. It's rich with interesting examples that will spark your imagination. The book covers batch scripting and string processing, COM, WMI, remote management and jobs and even .NET programming including WinForms and WPF/XAML.",
            "status": "PUBLISH",
            "authors": ["Bruce Payette"],
            "categories": ["Microsoft"]
        }, {
            "id": 248,
            "title": "Silverlight 4 in Action, Revised Edition",
            "isbn": "1935182374",
            "pageCount": 425,
            "publishedDate": {
                "$date": "2010-10-04T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pbrown.jpg",
            "description": "Silverlight in Action, Revised Edition is a comprehensive guide to Silverlight, taking you from Hello World through the techniques you'll need to build sophisticated rich web apps. This new edition covers all the new features added in the latest versions of Silverlight, Visual Studio, and Expression Blend, along with the best practices emerging in the Silverlight community. With more than 50% new content, you'll take a mind-expanding trip through the technology, features, and techniques required to build applications ranging from media, to custom experiences, to business applications to games.",
            "status": "PUBLISH",
            "authors": ["Pete Brown"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 249,
            "title": "Silverlight 5 in Action",
            "isbn": "1617290319",
            "pageCount": 925,
            "publishedDate": {
                "$date": "2012-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pbrown2.jpg",
            "status": "PUBLISH",
            "authors": ["Pete Brown"],
            "categories": ["Microsoft", ".NET"]
        }, {
            "id": 250,
            "title": "Hibernate Quickly",
            "isbn": "1932394419",
            "pageCount": 456,
            "publishedDate": {
                "$date": "2005-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/peak.jpg",
            "description": "\"If you want to learn Hibernate quickly, this book shows you step by step.\" - Sang Shin, Java Technology Architect, Sun Microsystems",
            "status": "PUBLISH",
            "authors": ["Patrick Peak", "Nick Heudecker"],
            "categories": ["Java"]
        }, {
            "id": 251,
            "title": "Generative Art",
            "isbn": "1935182625",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2011-06-30T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pearson.jpg",
            "status": "PUBLISH",
            "authors": ["Matt Pearson"],
            "categories": ["Algorithmic Art"]
        }, {
            "id": 252,
            "title": "Windows Phone 7 in Action",
            "isbn": "1617290092",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-08-21T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/perga.jpg",
            "description": "Windows Phone 7 in Action is a hands-on guide to building mobile applications for WP7 using Silverlight, C#, and XNA. Written for developers who already know their way around Visual Studio, this book zips through the basics, such as writing code to dial the phone, writing emails, and sending text messages, and moves on to the nuts and bolts of building great phone apps. By working through the numerous examples and tutorials, you'll master the APIs used to work with a phone's sensors and hardware, such as the accelerometer, camera, touch screen, GPS, and microphone. You'll also tackle web services and applications that use location and push notification services.",
            "status": "PUBLISH",
            "authors": ["Timothy Binkley-Jones", "Massimo Perga", "", "Michael Sync"],
            "categories": ["Mobile Technology"]
        }, {
            "id": 253,
            "title": "Lift in Action",
            "isbn": "1935182803",
            "pageCount": 450,
            "publishedDate": {
                "$date": "2011-11-18T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/perrett.jpg",
            "status": "PUBLISH",
            "authors": ["Timothy Perrett"],
            "categories": ["Java"]
        }, {
            "id": 254,
            "title": "Web Development with Apache and Perl",
            "isbn": "1930110065",
            "pageCount": 424,
            "publishedDate": {
                "$date": "2002-04-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/petersen.jpg",
            "status": "PUBLISH",
            "authors": ["Theo Petersen"],
            "categories": ["Perl", "Client-Server"]
        }, {
            "id": 255,
            "title": "Real-World Functional Programming",
            "isbn": "1933988924",
            "pageCount": 560,
            "publishedDate": {
                "$date": "2009-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/petricek.jpg",
            "description": "This book teaches the ideas and techniques of functional programming applied to real-world problems. You'll see how the functional way of thinking changes the game for .NET developers. Then, you'll tackle common issues using a functional approach. The book will also teach you the basics of the F# language and extend your C# skills into the functional domain. No prior experience with functional programming or F# is required.",
            "status": "PUBLISH",
            "authors": ["Tomas Petricek with Jon Skeet"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 256,
            "title": "Machine Learning in Action",
            "isbn": "1617290181",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-04-04T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pharrington.jpg",
            "description": "Machine Learning in Action is a unique book that blends the foundational theories of machine learning with the practical realities of building tools for everyday data analysis. In it, you'll use the flexible Python programming language to build programs that implement algorithms for data classification, forecasting, recommendations, and higher-level features like summarization and simplification.",
            "status": "PUBLISH",
            "authors": ["Peter Harrington"],
            "categories": ["Software Engineering"]
        }, {
            "id": 257,
            "title": "Dependency Injection",
            "isbn": "193398855X",
            "pageCount": 352,
            "publishedDate": {
                "$date": "2009-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/prasanna.jpg",
            "description": "   If you do large scale java apps, you probably want to have someone on the team have this book.       Michael Neale",
            "status": "PUBLISH",
            "authors": ["Dhanji R. Prasanna"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 258,
            "title": "Understanding Enterprise SOA",
            "isbn": "1932394591",
            "pageCount": 280,
            "publishedDate": {
                "$date": "2005-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pulier.jpg",
            "description": "\"SOA is real ... Pulier is uniquely qualified to make [it] accessible to the general business audience.\" - Paul Gaffney, Staples, Inc., From the Foreword",
            "status": "PUBLISH",
            "authors": ["Eric Pulier and Hugh Taylor", "Foreword by Paul Gaffney"],
            "categories": ["Theory"]
        }, {
            "id": 259,
            "title": "Open-Source ESBs in Action",
            "isbn": "1933988215",
            "pageCount": 528,
            "publishedDate": {
                "$date": "2008-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rademakers.jpg",
            "status": "PUBLISH",
            "authors": ["Tijs Rademakers", "Jos Dirksen"],
            "categories": ["Business"]
        }, {
            "id": 260,
            "title": "Activiti in Action",
            "isbn": "1617290122",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-07-12T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rademakers2.jpg",
            "status": "PUBLISH",
            "authors": ["Tijs Rademakers"],
            "categories": ["Software Engineering"]
        }, {
            "id": 261,
            "title": "DSLs in Boo: Domain-Specific Languages in .NET",
            "isbn": "1933988606",
            "pageCount": 352,
            "publishedDate": {
                "$date": "2010-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rahien.jpg",
            "description": "DSLs in Boo shows you how to design, extend, and evolve DSLs for .NET by focusing on approaches and patterns. You learn to define an app in terms that match the domain, and to use Boo to build DSLs that generate efficient executables. And you won't deal with the awkward XML-laden syntax many DSLs require. The book concentrates on writing internal (textual) DSLs that allow easy extensibility of the application and framework. And if you don't know Boo, don't worry   you'll learn right here all the techniques you need.  ",
            "status": "PUBLISH",
            "authors": ["Oren Eini writing as Ayende Rahien"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 262,
            "title": "JUnit Recipes",
            "isbn": "1932394230",
            "pageCount": 752,
            "publishedDate": {
                "$date": "2004-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rainsberger.jpg",
            "status": "PUBLISH",
            "authors": ["J. B. Rainsberger with contributions by Scott Stirling"],
            "categories": ["Java"]
        }, {
            "id": 263,
            "title": "wxPython in Action",
            "isbn": "1932394621",
            "pageCount": 620,
            "publishedDate": {
                "$date": "2006-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rappin.jpg",
            "description": "\"The book is easy to read and provides an approach to a very practical contemporary topic. The authors have organized their material well.\" -- Melissa Strange, Walden University, www.reviews.com",
            "status": "PUBLISH",
            "authors": ["Noel Rappin", "Robin Dunn"],
            "categories": ["Python"]
        }, {
            "id": 264,
            "title": "Clojure in Action",
            "isbn": "1935182595",
            "pageCount": 475,
            "publishedDate": {
                "$date": "2011-11-15T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rathore.jpg",
            "description": "Clojure in Action is a hands-on tutorial for the working programmer who has written code in a language like Java or Ruby, but has no prior experience with Lisp. It teaches Clojure from the basics to advanced topics using practical, real-world application examples. Blow through the theory and dive into practical matters like unit-testing, environment set up, all the way through building a scalable web-application using domain-specific languages, Hadoop, HBase, and RabbitMQ.",
            "status": "PUBLISH",
            "authors": ["Amit Rathore"],
            "categories": ["Java"]
        }, {
            "id": 265,
            "title": "Scala in Action",
            "isbn": "1935182757",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-04-09T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/raychaudhuri.jpg",
            "status": "PUBLISH",
            "authors": ["Nilanjan Raychaudhuri"],
            "categories": ["Java"]
        }, {
            "id": 266,
            "title": "Working with Objects",
            "isbn": "134529308",
            "pageCount": 420,
            "publishedDate": {
                "$date": "1995-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/reenskaug.jpg",
            "description": "\"The first method that deals realistically with reuse, and one of the few that comes close to describing what I do when I design.\" --Ralph Johnson, University of Illinois",
            "status": "PUBLISH",
            "authors": ["Trygve Reenskaug"],
            "categories": ["Object-Oriented Programming"]
        }, {
            "id": 267,
            "title": "PHP in Action",
            "isbn": "1932394753",
            "pageCount": 552,
            "publishedDate": {
                "$date": "2007-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/reiersol.jpg",
            "description": "\"If there was ever a textbook for software development in PHP, this would be it.\"    Cal Evans, Podcast Review, Zend Developer Network",
            "status": "PUBLISH",
            "authors": ["Dagfinn Reiersøl with Marcus Baker", "Chris Shiflett"],
            "categories": ["PHP"]
        }, {
            "id": 269,
            "title": "Secrets of the JavaScript Ninja",
            "isbn": "193398869X",
            "pageCount": 300,
            "publishedDate": {
                "$date": "2012-12-27T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/resig.jpg",
            "description": "   Secrets of the Javascript Ninja is definitely a book for anyone looking to significantly improve their Javascript knowledge and skills.       Ryan Doherty, Web Development Engineer, Mozilla",
            "status": "PUBLISH",
            "authors": ["John Resig"],
            "categories": ["Java"]
        }, {
            "id": 270,
            "title": "Microsoft Office Essentials",
            "isbn": "132623129",
            "pageCount": 480,
            "publishedDate": {
                "$date": "1996-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/richardson2.jpg",
            "description": "Microsoft Office Essentials simply covers the things you really want to know and skips over all those esoteric features that 99 out of 100 readers never use.",
            "status": "PUBLISH",
            "authors": ["Ronny Richardson"],
            "categories": ["Business"]
        }, {
            "id": 271,
            "title": "Swing",
            "isbn": "1884777848",
            "pageCount": 0,
            "publishedDate": {
                "$date": "1999-12-01T00:00:00.000-0800"
            },
            "status": "PUBLISH",
            "authors": ["Matthew Robinson", "Pavel Vorobiev"],
            "categories": ["Java"]
        }, {
            "id": 272,
            "title": "Swing Second Edition",
            "isbn": "193011088X",
            "pageCount": 912,
            "publishedDate": {
                "$date": "2003-02-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/robinson2.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": ["Java", "Internet"]
        }, {
            "id": 273,
            "title": "The Awesome Power of Java Beans",
            "isbn": "1884777562",
            "pageCount": 500,
            "publishedDate": {
                "$date": "1998-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rodrigues.jpg",
            "status": "PUBLISH",
            "authors": ["Lawrence H. Rodrigues"],
            "categories": ["Java"]
        }, {
            "id": 274,
            "title": "Personal Videoconferencing",
            "isbn": "013268327X",
            "pageCount": 420,
            "publishedDate": {
                "$date": "1996-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosen.jpg",
            "description": "\"Personal Videoconferencing is having an enormous impact on business. Evan Rosen has quantified that impact with examples of real world implementations and provided a primer on how businesses can achieve this competitive advantage for themselves.\"  --Frank Gill, Executive Vice President, Internet and Communications Group, Intel    \"The book is very good: it is clear and the examples of user applications are excellent\"  --Ralph Ungermann, CEO, First Virtual Corporation ",
            "status": "PUBLISH",
            "authors": ["Evan Rosen"],
            "categories": ["Networking"]
        }, {
            "id": 275,
            "title": "The Cloud at Your Service",
            "isbn": "1935182528",
            "pageCount": 200,
            "publishedDate": {
                "$date": "2010-11-22T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosenberg.jpg",
            "status": "PUBLISH",
            "authors": ["Jothy Rosenberg", "Arthur Mateos"],
            "categories": ["Internet"]
        }, {
            "id": 276,
            "title": "Implementing Elliptic Curve Cryptography",
            "isbn": "1884777694",
            "pageCount": 330,
            "publishedDate": {
                "$date": "1998-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosing.jpg",
            "description": "\"The book provides all the theory and working programs needed to create real applications based on the latest IEEE P1363 standard.\"  --Reviewed in Cryptologia",
            "status": "PUBLISH",
            "authors": ["Michael Rosing"],
            "categories": ["Theory"]
        }, {
            "id": 277,
            "title": "SOA Patterns",
            "isbn": "1933988266",
            "pageCount": 250,
            "publishedDate": {
                "$date": "2012-09-12T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rotem.jpg",
            "description": "In SOA Patterns, author Arnon Rotem-Gal-Oz provides detailed, technology-neutral solutions to these challenges, and many others. This book provides architectural guidance through patterns and anti-patterns. It shows you how to build real SOA services that feature flexibility, availability, and scalability.",
            "status": "PUBLISH",
            "authors": ["Arnon Rotem-Gal-Oz"],
            "categories": ["SOA"]
        }, {
            "id": 278,
            "title": "Hello World!",
            "isbn": "1933988495",
            "pageCount": 432,
            "publishedDate": {
                "$date": "2009-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sande.jpg",
            "description": "Hello World! provides a gentle but thorough introduction to the world of computer programming.",
            "status": "PUBLISH",
            "authors": ["Warren D. Sande", "Carter Sande"],
            "categories": ["Programming", "Python"]
        }, {
            "id": 279,
            "title": "SCBCD Exam Study Kit",
            "isbn": "1932394400",
            "pageCount": 488,
            "publishedDate": {
                "$date": "2005-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sanghera.jpg",
            "status": "PUBLISH",
            "authors": ["Paul Sanghera"],
            "categories": ["Java"]
        }, {
            "id": 280,
            "title": "Portlets in Action",
            "isbn": "1935182544",
            "pageCount": 475,
            "publishedDate": {
                "$date": "2011-09-16T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sarin.jpg",
            "description": "Portlets in Action is a comprehensive guide for Java developers with minimal or no experience working with portlets. Fully exploring the Portlet 2.0 API and using widely adopted frameworks like Spring 3.0 Portlet MVC, Hibernate, and DWR, it teaches you portal and portlet development by walking you through a Book Catalog portlet and Book Portal examples.",
            "status": "PUBLISH",
            "authors": ["Ashish Sarin"],
            "categories": ["Java"]
        }, {
            "id": 281,
            "title": "SWT/JFace in Action",
            "isbn": "1932394273",
            "pageCount": 496,
            "publishedDate": {
                "$date": "2004-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/scarpino.jpg",
            "description": "Guides you through the process of developing Eclipse-based GUIs and shows how to build applications with features your users will love. Packed with examples and no fluff.",
            "status": "PUBLISH",
            "authors": ["Matthew Scarpino", "Stephen Holder", "Stanford Ng", "", "Laurent Mihalkovic"],
            "categories": ["Java"]
        }, {
            "id": 282,
            "title": "OpenCL in Action",
            "isbn": "1617290173",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2011-11-14T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/scarpino2.jpg",
            "status": "PUBLISH",
            "authors": ["Matthew Scarpino"],
            "categories": ["Programming"]
        }, {
            "id": 283,
            "title": "Multiprotocol over ATM",
            "isbn": "138892709",
            "pageCount": 341,
            "publishedDate": {
                "$date": "1998-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/schmidt.jpg",
            "description": "With the detailed coverage of the entire set of protocols in Multiprotocol over ATM, you can be equal to the task.",
            "status": "PUBLISH",
            "authors": ["Andrew Schmidt", "Daniel Minoli"],
            "categories": ["Internet", "Networking"]
        }, {
            "id": 284,
            "title": "Dependency Injection in .NET",
            "isbn": "1935182501",
            "pageCount": 375,
            "publishedDate": {
                "$date": "2011-10-03T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/seemann.jpg",
            "description": "Dependency Injection in .NET is a comprehensive guide than introduces DI and provides an in-depth look at applying DI practices to .NET apps. In it, you will also learn to integrate DI together with such technologies as Windows Communication Foundation, ASP.NET MVC, Windows Presentation Foundation and other core .NET components.",
            "status": "PUBLISH",
            "authors": ["Mark Seemann"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 285,
            "title": "Java 3D Programming",
            "isbn": "1930110359",
            "pageCount": 400,
            "publishedDate": {
                "$date": "2002-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/selman.jpg",
            "status": "PUBLISH",
            "authors": ["Daniel Selman"],
            "categories": ["Java", "Internet", "Computer Graph"]
        }, {
            "id": 286,
            "title": "Liferay in Action",
            "isbn": "193518282X",
            "pageCount": 375,
            "publishedDate": {
                "$date": "2011-09-20T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sezov.jpg",
            "status": "PUBLISH",
            "authors": ["Richard Sezov", "Jr"],
            "categories": ["Internet"]
        }, {
            "id": 287,
            "title": "JSP Tag Libraries",
            "isbn": "193011009X",
            "pageCount": 656,
            "publishedDate": {
                "$date": "2001-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/shachor.jpg",
            "status": "PUBLISH",
            "authors": ["Gal Shachor", "Adam Chace", "Magnus Rydin"],
            "categories": ["Java", "Internet"]
        }, {
            "id": 289,
            "title": "Instant Messaging in Java",
            "isbn": "1930110464",
            "pageCount": 402,
            "publishedDate": {
                "$date": "2002-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/shigeoka.jpg",
            "description": "This intermediate Java programming book provides Java programmers with the information and tools needed to create your own IM client and server software.",
            "status": "PUBLISH",
            "authors": ["Iain Shigeoka"],
            "categories": ["Internet", "Java"]
        }, {
            "id": 290,
            "title": "Java Applets and Channels Without Programming",
            "isbn": "1884777392",
            "pageCount": 372,
            "publishedDate": {
                "$date": "1999-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/shoffner.jpg",
            "description": "Java Applets and Channels Without Programming collects almost 100 applets on a CD with detailed instructions on how to use each applet. In addition, style issues are discussed in detail; not only will you learn how to use each applet, you will learn when and where it is appropriate to use each applet. The book also introduces the new concept of channels and shows how these can be used on your web site as well.  ",
            "status": "PUBLISH",
            "authors": ["Ronny Richardson", "Michael Shoffner", "Marq Singer", "Bruce Murray", "", "Jack Gambol"],
            "categories": ["Java"]
        }, {
            "id": 291,
            "title": "PowerShell in Practice",
            "isbn": "1935182005",
            "pageCount": 500,
            "publishedDate": {
                "$date": "2010-06-08T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/siddaway.jpg",
            "description": "PowerShell in Practice is a hands-on, cookbook-style reference intended for administrators wanting to learn and use PowerShell. Written from an administrator's perspective, it concentrates on using PowerShell for practical tasks and automation. The book starts with an introduction that includes a rapid tutorial and a review of the key areas in which you'll use PowerShell.",
            "status": "PUBLISH",
            "authors": ["Richard Siddaway"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 292,
            "title": "PowerShell and WMI",
            "isbn": "1617290114",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-04-30T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/siddaway2.jpg",
            "status": "PUBLISH",
            "authors": ["Richard Siddaway"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 293,
            "title": "Making Sense of Java",
            "isbn": "132632942",
            "pageCount": 180,
            "publishedDate": {
                "$date": "1996-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/simpson.jpg",
            "description": "Making Sense of Java clearly and concisely explains the concepts, features, benefits, potential, and limitations of Java.",
            "status": "PUBLISH",
            "authors": ["Bruce Simpson", "John Mitchell", "Brian Christeson", "Rehan Zaidi", "", "Jonathan Levine"],
            "categories": ["Java", "Business"]
        }, {
            "id": 294,
            "title": "C++/CLI in Action",
            "isbn": "1932394818",
            "pageCount": 416,
            "publishedDate": {
                "$date": "2007-04-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sivakumar.jpg",
            "description": "   ... a great resource, an outstanding job, a must-read...        Ayman B. Shoukry, VC++ Team, Microsoft Corporation",
            "status": "PUBLISH",
            "authors": ["Nishant Sivakumar"],
            "categories": ["Microsoft"]
        }, {
            "id": 295,
            "title": "C# in Depth",
            "isbn": "1933988363",
            "pageCount": 424,
            "publishedDate": {
                "$date": "2008-04-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeet.jpg",
            "status": "PUBLISH",
            "authors": ["Jon Skeet"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 296,
            "title": "C# in Depth, Second Edition",
            "isbn": "1935182471",
            "pageCount": 584,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeet2.jpg",
            "description": "C# in Depth, Second Edition concentrates on the high-value features that make C# such a powerful and flexible development tool. Rather than re-hashing the core of C# that's essentially unchanged since it hit the scene nearly a decade ago, this book brings you up to speed with the features and practices that have changed with C# from version 2.0 onwards.",
            "status": "PUBLISH",
            "authors": ["Jon Skeet"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 297,
            "title": "Magical A-Life Avatars",
            "isbn": "1884777589",
            "pageCount": 450,
            "publishedDate": {
                "$date": "2000-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/small.jpg",
            "description": "\"Distinctive book explaining how to get intelligent software agents to work.\" --Clipcode.com",
            "status": "PUBLISH",
            "authors": ["Peter Small"],
            "categories": ["Internet", "Theory"]
        }, {
            "id": 298,
            "title": "Becoming Agile",
            "isbn": "1933988258",
            "pageCount": 408,
            "publishedDate": {
                "$date": "2009-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/smith.jpg",
            "description": "   Becoming Agile is not another book to be classified in the existing ones handling agile practices, it's one of the rare writings which will go with you in the adoption and setup/migration to an agile process...This real must-have agilist's bedside book reads very well and will accompany you in your migration agile practices...       Eric Siber, Developpez.com",
            "status": "PUBLISH",
            "authors": ["Greg Smith", "Ahmed Sidky"],
            "categories": ["Software Engineering"]
        }, {
            "id": 299,
            "title": "ActiveMQ in Action",
            "isbn": "1933988940",
            "pageCount": 408,
            "publishedDate": {
                "$date": "2011-03-31T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/snyder.jpg",
            "description": "ActiveMQ is implemented in Java, but it supports client applications written in many other programming languages including C/C++, .NET, Ruby, Perl, PHP, Python, and more. It can be integrated with other open source frameworks including Tomcat, ServiceMix, JBoss, and can easily bridge to other JMS providers.  ",
            "status": "PUBLISH",
            "authors": ["Bruce Snyder", "Dejan Bosanac", "", "Rob Davies"],
            "categories": ["Java"]
        }, {
            "id": 300,
            "title": "Implementing PeopleSoft Financials",
            "isbn": "138411808",
            "pageCount": 220,
            "publishedDate": {
                "$date": "1997-01-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stephens.jpg",
            "description": "Implementing PeopleSoft Financials discusses the issues that arise and the pitfalls to avoid. Every member of the implementation team--from entry-level accounting clerk through MIS staff to executive sponsors--will benefit from reading this book.",
            "status": "PUBLISH",
            "authors": ["Early Stephens"],
            "categories": ["Business", "Client-Server"]
        }, {
            "id": 302,
            "title": "SQL Server DMVs in Action",
            "isbn": "1935182730",
            "pageCount": 352,
            "publishedDate": {
                "$date": "2011-05-09T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stirk.jpg",
            "description": "SQL Server DMVs in Action shows you how to obtain, interpret, and act on the information captured by DMVs to keep your system in top shape. The over 100 code examples help you master DMVs and give you an instantly reusable SQL library. You'll also learn to use Dynamic Management Functions (DMFs), which provide further details that enable you to improve your system's performance and health.",
            "status": "PUBLISH",
            "authors": ["Ian W. Stirk"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 303,
            "title": "Scala in Depth",
            "isbn": "1935182706",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-05-14T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/suereth.jpg",
            "description": "Scala in Depth is a unique new book designed to help you integrate Scala effectively into your development process. By presenting the emerging best practices and designs from the Scala community, it guides you though dozens of powerful techniques example by example. There's no heavy-handed theory here-just lots of crisp, practical guides for coding in Scala.    For example:        * Discover the \"sweet spots\" where object-oriented and functional programming intersect.      * Master advanced OO features of Scala, including type member inheritance, multiple inheritance and composition.      * Employ functional programming concepts like tail recursion, immutability, and monadic operations.      * Learn good Scala style to keep your code concise, expressive and readable.    As you dig into the book, you'll start to appreciate what makes Scala really shine. For instance, the Scala type system is very, very powerful; this book provides use case approaches to manipulating the type system and covers how to use type constraints to enforce design constraints. Java developers love Scala's deep integration with Java and the JVM Ecosystem, and this book shows you how to leverage it effectively and work around the rough spots.",
            "status": "PUBLISH",
            "authors": ["Joshua D. Suereth"],
            "categories": ["Java"]
        }, {
            "id": 304,
            "title": "JMX in Action",
            "isbn": "1930110561",
            "pageCount": 424,
            "publishedDate": {
                "$date": "2002-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sullins.jpg",
            "status": "PUBLISH",
            "authors": ["Benjamin G. Sullins", "Mark B. Whipple"],
            "categories": ["Java"]
        }, {
            "id": 305,
            "title": "EJB Cookbook",
            "isbn": "1930110944",
            "pageCount": 352,
            "publishedDate": {
                "$date": "2003-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sullins2.jpg",
            "description": "\"This book provides a great reference for the average EJB developer. It provides recipes for most common tasks that an EJB developer would need.\" -- Computing Reviews, Nov. 2003",
            "status": "PUBLISH",
            "authors": ["Benjamin G. Sullins", "Mark B. Whipple"],
            "categories": ["Java"]
        }, {
            "id": 306,
            "title": "GWT in Action, Second Edition",
            "isbn": "1935182846",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-01-21T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tacy.jpg",
            "status": "PUBLISH",
            "authors": ["Adam Tacy", "Robert Hanson", "Jason Essington", "", "Anna Tökke"],
            "categories": ["Java"]
        }, {
            "id": 307,
            "title": "JUnit in Action, Second Edition",
            "isbn": "1935182021",
            "pageCount": 504,
            "publishedDate": {
                "$date": "2010-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tahchiev.jpg",
            "description": "JUnit in Action, Second Edition is an up-to-date guide to unit testing Java applications (including Java EE applications) using the JUnit framework and its extensions. This book provides techniques for solving real-world problems such as testing AJAX applications, using mocks to achieve testing isolation, in-container testing for Java EE and database applications, and test automation.",
            "status": "PUBLISH",
            "authors": ["Petar Tahchiev", "Felipe Leme", "Vincent Massol", "", "Gary Gregory"],
            "categories": ["Java"]
        }, {
            "id": 308,
            "title": "Bitter Java",
            "isbn": "193011043X",
            "pageCount": 368,
            "publishedDate": {
                "$date": "2002-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tate.jpg",
            "status": "PUBLISH",
            "authors": ["Bruce A. Tate"],
            "categories": ["Java", "Business", "Client Server", ""]
        }, {
            "id": 309,
            "title": "Bitter EJB",
            "isbn": "1930110952",
            "pageCount": 440,
            "publishedDate": {
                "$date": "2003-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tate2.jpg",
            "description": "\"The book's informal tone offers a refreshing change from the ubiquitous preachiness of other EJB tomes. It's pragmatic and doesn't tap dance around the fact that EJBs are often used incorrectly in enterprise development... it's an effective way to avoid the potholes that have forced developers off track in the past.\" -- Software Development Magazine",
            "status": "PUBLISH",
            "authors": ["Bruce Tate", "Mike Clark", "Bob Lee", "Patrick Linskey"],
            "categories": ["Java", "Internet"]
        }, {
            "id": 310,
            "title": "Spring Batch in Action",
            "isbn": "1935182951",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2011-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/templier.jpg",
            "status": "PUBLISH",
            "authors": ["Arnaud Cogoluegnes", "Thierry Templier", "Gary Gregory", "Olivier Bazoud"],
            "categories": ["In Action"]
        }, {
            "id": 312,
            "title": "JDK 1.4 Tutorial",
            "isbn": "1930110456",
            "pageCount": 408,
            "publishedDate": {
                "$date": "2002-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/travis.jpg",
            "status": "PUBLISH",
            "authors": ["Gregory M. Travis"],
            "categories": ["Java", "Internet"]
        }, {
            "id": 313,
            "title": "iPhone and iPad in Action",
            "isbn": "1935182587",
            "pageCount": 450,
            "publishedDate": {
                "$date": "2010-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/trebitowski.jpg",
            "description": "Using many examples, the book covers core features like accelerometers, GPS, the Address Book, and much more. Along the way, you'll learn to leverage your iPhone skills to build attractive iPad apps. This is a revised and expanded edition of the original iPhone in Action.",
            "status": "PUBLISH",
            "authors": ["Brandon Trebitowski", "Christopher Allen", "", "Shannon Appelcline"],
            "categories": ["Mobile Technology"]
        }, {
            "id": 314,
            "title": "SQL Server 2005 Reporting Services in Action",
            "isbn": "1932394761",
            "pageCount": 600,
            "publishedDate": {
                "$date": "2006-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/updegraff.jpg",
            "status": "PUBLISH",
            "authors": ["Bret Updegraff"],
            "categories": ["Microsoft"]
        }, {
            "id": 315,
            "title": "Ten Years of UserFriendly.Org",
            "isbn": "1935182129",
            "pageCount": 1096,
            "publishedDate": {
                "$date": "2008-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/userfriendly.jpg",
            "description": "This unique collector's volume includes every daily strip from November 17, 1997 to November 16, 2007. Many of the cartoons are annotated with comments from UserFriendly artist and creator JD    Illiad    Frazer.",
            "status": "PUBLISH",
            "authors": ["JD \"Illiad\" Frazer"],
            "categories": ["Miscellaneous"]
        }, {
            "id": 316,
            "title": "Graphics Programming with Perl",
            "isbn": "1930110022",
            "pageCount": 328,
            "publishedDate": {
                "$date": "2002-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/verbruggen.jpg",
            "status": "PUBLISH",
            "authors": ["Martien Verbruggen"],
            "categories": ["Computer Graphics", "Perl"]
        }, {
            "id": 317,
            "title": "RabbitMQ in Action",
            "isbn": "1935182978",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-04-20T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/videla.jpg",
            "status": "PUBLISH",
            "authors": ["Alvaro Videla", "Jason J.W. Williams"],
            "categories": ["Software Engineering"]
        }, {
            "id": 318,
            "title": "XDoclet in Action",
            "isbn": "1932394052",
            "pageCount": 624,
            "publishedDate": {
                "$date": "2003-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls.jpg",
            "status": "PUBLISH",
            "authors": ["Craig Walls", "Norman Richards"],
            "categories": ["XML", "Java"]
        }, {
            "id": 319,
            "title": "Spring in Action",
            "isbn": "1932394354",
            "pageCount": 472,
            "publishedDate": {
                "$date": "2005-02-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls2.jpg",
            "description": "Spring in Action introduces you to the ideas behind Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications. You will see how to solve persistence problems using the leading open-source tools, and also how to integrate your application with the most popular web frameworks. You will learn how to use Spring to manage the bulk of your infrastructure code so you can focus on what really matters     your critical business needs.",
            "status": "PUBLISH",
            "authors": ["Craig Walls", "Ryan Breidenbach"],
            "categories": ["Java"]
        }, {
            "id": 320,
            "title": "Spring in Action, Second Edition",
            "isbn": "1933988134",
            "pageCount": 768,
            "publishedDate": {
                "$date": "2007-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls3.jpg",
            "status": "PUBLISH",
            "authors": ["Craig Walls with Ryan Breidenbach"],
            "categories": ["Java"]
        }, {
            "id": 321,
            "title": "Spring in Action, Third Edition",
            "isbn": "1935182358",
            "pageCount": 424,
            "publishedDate": {
                "$date": "2011-06-21T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls4.jpg",
            "description": "Spring in Action, Third Edition has been completely revised to reflect the latest features, tools, practices Spring offers to java developers. It begins by introducing the core concepts of Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications.",
            "status": "PUBLISH",
            "authors": ["Craig Walls"],
            "categories": ["Java"]
        }, {
            "id": 325,
            "title": "Spring in Practice",
            "isbn": "1935182056",
            "pageCount": 600,
            "publishedDate": {
                "$date": "2013-05-09T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wheeler.jpg",
            "description": "Spring in Practice diverges from other cookbooks because it presents the background you need to understand the domain in which a solution applies before it offers the specific steps to solve the problem. You're never left with the feeling that you understand the answer, but find the question irrelevant. You can put the book to immediate use even if you don't have deep knowledge of every part of Spring Framework.",
            "status": "PUBLISH",
            "authors": ["Willie Wheeler with Joshua White"],
            "categories": ["Java", "Software Development"]
        }, {
            "id": 327,
            "title": "Java 2 Micro Edition",
            "isbn": "1930110332",
            "pageCount": 504,
            "publishedDate": {
                "$date": "2002-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/white.jpg",
            "status": "PUBLISH",
            "authors": ["James P. White", "David A. Hemphill"],
            "categories": ["Java", "Internet"]
        }, {
            "id": 328,
            "title": "SharePoint 2010 Workflows in Action",
            "isbn": "1935182714",
            "pageCount": 360,
            "publishedDate": {
                "$date": "2011-02-07T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wicklund.jpg",
            "description": "SharePoint 2010 Workflows in Action is a hands-on guide for workflow application development in SharePoint. Power users are introduced to the simplicity of building and integrating workflows using SharePoint Designer, Visio, InfoPath, and Office. Developers will learn to build custom processes and use external data sources. They will learn about state machine workflows, ASP.NET forms, event handlers, and much more. This book requires no previous experience with workflow app development. ",
            "status": "PUBLISH",
            "authors": ["Phil Wicklund"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 329,
            "title": "SharePoint 2010 Web Parts in Action",
            "isbn": "1935182773",
            "pageCount": 448,
            "publishedDate": {
                "$date": "2011-04-24T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wilen.jpg",
            "description": "SharePoint 2010 Web Parts in Action is a comprehensive guide to deploying, customizing, and creating Web Parts. Countless examples walk you through everything from design, to development, deployment, troubleshooting, and upgrading. Because Web Parts are ASP.NET controls, you'll learn to use Visual Studio 2010 to extend existing Web Parts and to build custom components from scratch. ",
            "status": "PUBLISH",
            "authors": ["Wictor Wilén"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 330,
            "title": "C++ Concurrency in Action",
            "isbn": "1933988770",
            "pageCount": 325,
            "publishedDate": {
                "$date": "2012-02-24T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/williams.jpg",
            "description": "C++ Concurrency in Action is the first book to show you how to take advantage of the new C++ Standard and TR2 to write robust multi-threaded applications in C++.",
            "status": "PUBLISH",
            "authors": ["Anthony Williams"],
            "categories": ["Microsoft .NET"]
        }, {
            "id": 331,
            "title": "Java Servlets by Example",
            "isbn": "188477766X",
            "pageCount": 550,
            "publishedDate": {
                "$date": "2002-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/williamson.jpg",
            "status": "PUBLISH",
            "authors": ["Alan R. Williamson"],
            "categories": ["Java", "Internet"]
        }, {
            "id": 332,
            "title": "XML Programming with VB and ASP",
            "isbn": "1884777872",
            "pageCount": 320,
            "publishedDate": {
                "$date": "1999-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wilson.jpg",
            "status": "PUBLISH",
            "authors": ["Mark Wilson", "Tracey Wilson"],
            "categories": ["XML", "Internet"]
        }, {
            "id": 334,
            "title": "Oracle8i Database Administration",
            "isbn": "1884777783",
            "pageCount": 543,
            "publishedDate": {
                "$date": "1999-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/yuhanna.jpg",
            "status": "PUBLISH",
            "authors": ["Noel Yuhanna"],
            "categories": ["Client-Server", "Networking"]
        }, {
            "id": 335,
            "title": "The Engaging Web",
            "isbn": "9781935182078",
            "pageCount": 325,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/zichermann.jpg",
            "description": "The Engaging Web: How Fun and Games Improve Your Site shows web developers how to incorporate games into websites. This book will help you decode the possibilities and provide a series of proven and tangible strategies that any web developer, producer, or product manager can use to implement games in their website. Whether you're looking to make games the centerpiece of your site, an added-value feature, or you just want to engage and excite your users, The Engaging Web will help you develop a strategy that harnesses the power of games.",
            "status": "MEAP",
            "authors": ["Gabe Zichermann", "Chris Cunningham"],
            "categories": ["Web Development"]
        }, {
            "id": 512,
            "title": "Enterprise OSGi In Action",
            "isbn": "1617290130",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cummins.jpg",
            "status": "PUBLISH",
            "authors": ["Holly Cummins", "Timothy Ward"],
            "categories": []
        }, {
            "id": 513,
            "title": "Ext JS in Action, Second Edition",
            "isbn": "1617290327",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-02-04T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/garcia3.jpg",
            "status": "PUBLISH",
            "authors": ["Jesus Garcia", "Grgur Grisogono", "", "Jacob K. Andresen"],
            "categories": []
        }, {
            "id": 514,
            "title": "Android in Action, Third Edition",
            "isbn": "1617290505",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2011-11-15T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson3.jpg",
            "status": "PUBLISH",
            "authors": ["W. Frank Ableson", "Robi Sen", "Chris King", "C. Enrique Ortiz"],
            "categories": []
        }, {
            "id": 515,
            "title": "Arduino in Action",
            "isbn": "1617290246",
            "pageCount": 300,
            "publishedDate": {
                "$date": "2013-05-30T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mevans.jpg",
            "description": "Arduino in Action is a hands-on guide to prototyping and building electronics using the Arduino platform. Suitable for beginners and advanced users, this easy to follow book begins with the basics and systematically guides you through projects ranging from your first blinking LED through connecting Arduino to devices like game controllers or your iPhone.",
            "status": "PUBLISH",
            "authors": ["Martin Evans", "Joshua Noble", "", "Jordan Hochenbaum"],
            "categories": []
        }, {
            "id": 516,
            "title": "Node.js in Action",
            "isbn": "1617290572",
            "pageCount": 300,
            "publishedDate": {
                "$date": "2013-10-15T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cantelon.jpg",
            "description": "Node.js in Action is an example-driven tutorial that starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications. You'll start by learning how to set up your Node development environment, including loading the community-created extensions. Next, you'll run several simple demonstration programs where you'll learn the basics of a few common types of Node applications. Then you'll dive into asynchronous programming, a model Node leverages to lessen application bottlenecks.",
            "status": "PUBLISH",
            "authors": ["Mike Cantelon", "Marc Harter", "T.J. Holowaychuk", "", "Nathan Rajlich"],
            "categories": ["Web Development"]
        }, {
            "id": 517,
            "title": "Third-Party JavaScript ",
            "isbn": "1617290548",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-03-11T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/vinegar.jpg",
            "status": "PUBLISH",
            "authors": ["Ben Vinegar", "Anton Kovalyov"],
            "categories": []
        }, {
            "id": 519,
            "title": "Multimedia Computing",
            "isbn": "020152029X",
            "pageCount": 0,
            "publishedDate": {
                "$date": "1993-09-01T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": ["Matthew E. Hodges"],
            "categories": []
        }, {
            "id": 520,
            "title": "Web Development with JavaServer Pages",
            "isbn": "1884777996",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2000-05-15T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": ["Duane K. Fields", "Mark A. Kolb"],
            "categories": []
        }, {
            "id": 521,
            "title": "Up to Speed with Swing",
            "isbn": "1884777643",
            "pageCount": 0,
            "publishedDate": {
                "$date": "1998-05-01T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": ["Steven J. Gutz"],
            "categories": []
        }, {
            "id": 522,
            "title": "Manager's Guide to Open Source",
            "isbn": "193239429X",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2004-10-01T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": ["Maria Winslow"],
            "categories": []
        }, {
            "id": 523,
            "title": "Programming Web Services with Java",
            "isbn": "1930110421",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2002-10-01T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": ["Ajamu A. Wesley"],
            "categories": []
        }, {
            "id": 525,
            "title": "TCP/IP Programming for OS/2",
            "isbn": "132612496",
            "pageCount": 0,
            "publishedDate": {
                "$date": "1996-04-23T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": ["Steven J. Gutz"],
            "categories": []
        }, {
            "id": 530,
            "title": "Implementing SAP R/3, Second Edition",
            "isbn": "013889213X",
            "pageCount": 0,
            "publishedDate": {
                "$date": "1997-09-01T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": 531,
            "title": "Implementing SAP R/3",
            "isbn": "1884777228",
            "pageCount": 0,
            "publishedDate": {
                "$date": "1996-06-01T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": 532,
            "title": "Using C-Kermit: Communication Software",
            "isbn": "1884777147",
            "pageCount": 0,
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": 533,
            "title": "SCWCD Exam Study Kit",
            "isbn": "1930110596",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2002-07-01T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": ["Hanumant Deshmukh", "Jignesh Malavia"],
            "categories": []
        }, {
            "id": 549,
            "title": "Unit Testing in C++",
            "isbn": "1617290386",
            "pageCount": 0,
            "status": "PUBLISH",
            "authors": ["Bruce Trask", "Angel Roman"],
            "categories": []
        }, {
            "id": 550,
            "title": "Big Data",
            "isbn": "1617290343",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/marz.jpg",
            "status": "MEAP",
            "authors": ["Nathan Marz", "James Warren"],
            "categories": []
        }, {
            "id": 551,
            "title": "CoffeeScript in Action",
            "isbn": "1617290629",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-05-09T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lee.jpg",
            "status": "PUBLISH",
            "authors": ["Patrick Lee"],
            "categories": []
        }, {
            "id": 559,
            "title": "SQL Server MVP Deep Dives, Volume 2",
            "isbn": "1617290475",
            "pageCount": 750,
            "publishedDate": {
                "$date": "2011-10-13T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/delaney.jpg",
            "status": "PUBLISH",
            "authors": ["Kalen Delaney", "Louis Davidson", "Greg Low", "Brad McGehee", "Paul Nielsen", "Paul Randal", "", "Kimberly Tripp"],
            "categories": []
        }, {
            "id": 560,
            "title": "HTML5 in Action",
            "isbn": "1617290491",
            "pageCount": 375,
            "publishedDate": {
                "$date": "2014-02-10T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther2.jpg",
            "description": "HTML5 In Action provides a complete introduction to web development using HTML5. You'll explore every aspect of the HTML5 specification through real-world examples and code samples. It's much more than just a specification reference, though. It lives up to the name HTML5 in Action by giving you the practical, hands-on guidance you'll need to use key features.",
            "status": "PUBLISH",
            "authors": ["Rob Crowther", "Joe Lennon", "Ash Blue", "", "Greg Wanish"],
            "categories": []
        }, {
            "id": 562,
            "title": "Java Persistence with Hibernate, Second Edition",
            "isbn": "1617290459",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer3.jpg",
            "status": "MEAP",
            "authors": ["Christian Bauer", "Gavin King", "", "Gary Gregory"],
            "categories": []
        }, {
            "id": 566,
            "title": "Hadoop in Practice",
            "isbn": "1617290238",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-10-02T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/holmes.jpg",
            "status": "PUBLISH",
            "authors": ["Alex Holmes"],
            "categories": []
        }, {
            "id": 569,
            "title": "HBase in Action",
            "isbn": "1617290521",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-11-02T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dimidukkhurana.jpg",
            "status": "PUBLISH",
            "authors": ["Nicholas Dimiduk", "Amandeep Khurana"],
            "categories": []
        }, {
            "id": 571,
            "title": "Flex Mobile in Action",
            "isbn": "1617290610",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-05-30T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/campos.jpg",
            "status": "PUBLISH",
            "authors": ["Jonathan Campos"],
            "categories": []
        }, {
            "id": 577,
            "title": "HTML5 for .NET Developers",
            "isbn": "1617290432",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-11-30T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jackson.jpg",
            "status": "PUBLISH",
            "authors": ["Jim Jackson", "II", "Ian Gilman"],
            "categories": []
        }, {
            "id": 580,
            "title": "50 Android Hacks",
            "isbn": "1617290564",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-06-03T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sessa.jpg",
            "status": "PUBLISH",
            "authors": ["Carlos M. Sessa"],
            "categories": []
        }, {
            "id": 591,
            "title": "PowerShell in Depth",
            "isbn": "1617290556",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-02-20T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones2.jpg",
            "status": "PUBLISH",
            "authors": ["Don Jones", "Richard Siddaway", "", "Jeffery Hicks"],
            "categories": []
        }, {
            "id": 599,
            "title": "Augmented Reality Revealed",
            "isbn": "1617290165",
            "pageCount": 0,
            "status": "MEAP",
            "authors": ["Robert A. Rice Jr."],
            "categories": []
        }, {
            "id": 607,
            "title": "Building Well-Structured JavaScript Applications",
            "isbn": "1617290599",
            "pageCount": 0,
            "status": "MEAP",
            "authors": ["Julio C. Ody"],
            "categories": []
        }, {
            "id": 611,
            "title": "Linked Data",
            "isbn": "1617290394",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-12-31T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dwood.jpg",
            "status": "PUBLISH",
            "authors": ["David Wood", "Marsha Zaidman", "Luke Ruth", "with Michael Hausenblas"],
            "categories": []
        }, {
            "id": 620,
            "title": "Mule in Action, Second Edition",
            "isbn": "1617290823",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-02-20T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dossot2.jpg",
            "status": "PUBLISH",
            "authors": ["David Dossot", "John D'Emic", "", "Victor Romero"],
            "categories": []
        }, {
            "id": 624,
            "title": "Single Page Web Applications",
            "isbn": "1617290750",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-09-19T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mikowski.jpg",
            "status": "PUBLISH",
            "authors": ["Michael S. Mikowski", "Josh C. Powell"],
            "categories": []
        }, {
            "id": 628,
            "title": "The Art of Unit Testing, Second Edition",
            "isbn": "1617290890",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-11-25T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/osherove2.jpg",
            "status": "PUBLISH",
            "authors": ["Roy Osherove"],
            "categories": []
        }, {
            "id": 629,
            "title": "Play for Java",
            "isbn": "1617290904",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-03-14T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/leroux.jpg",
            "status": "PUBLISH",
            "authors": ["Nicolas Leroux", "Sietse de Kaper"],
            "categories": []
        }, {
            "id": 631,
            "title": "Hello World! Second Edition",
            "isbn": "1617290920",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-12-12T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sande2.jpg",
            "status": "PUBLISH",
            "authors": ["Warren Sande", "Carter Sande"],
            "categories": []
        }, {
            "id": 632,
            "title": "Dart in Action",
            "isbn": "1617290866",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-12-31T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/buckett.jpg",
            "status": "PUBLISH",
            "authors": ["Chris Buckett"],
            "categories": []
        }, {
            "id": 634,
            "title": "Redis in Action",
            "isbn": "1617290858",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-06-18T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/carlson.jpg",
            "status": "PUBLISH",
            "authors": ["Josiah Carlson"],
            "categories": []
        }, {
            "id": 636,
            "title": "Using the TI-83 Plus/TI-84 Plus",
            "isbn": "161729084X",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-08-19T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mitchell2.jpg",
            "status": "PUBLISH",
            "authors": ["Christopher R. Mitchell"],
            "categories": []
        }, {
            "id": 637,
            "title": "Neo4j in Action",
            "isbn": "1617290769",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/partner.jpg",
            "status": "MEAP",
            "authors": ["Jonas Partner", "Aleksa Vukotic", "", "Nicki Watt"],
            "categories": []
        }, {
            "id": 639,
            "title": "Programming the TI-83 Plus/TI-84 Plus",
            "isbn": "1617290777",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-09-14T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mitchell.jpg",
            "status": "PUBLISH",
            "authors": ["Christopher R. Mitchell"],
            "categories": []
        }, {
            "id": 640,
            "title": "Functional Programming in Scala",
            "isbn": "1617290653",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bjarnason.jpg",
            "status": "MEAP",
            "authors": ["Paul Chiusano", "Rúnar Bjarnason"],
            "categories": []
        }, {
            "id": 641,
            "title": "Play for Scala",
            "isbn": "1617290793",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-10-03T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hilton.jpg",
            "status": "PUBLISH",
            "authors": ["Peter Hilton", "Erik Bakker", "", "Francisco Canedo"],
            "categories": []
        }, {
            "id": 642,
            "title": "Node.js in Practice",
            "isbn": "1617290939",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/templier2.jpg",
            "status": "MEAP",
            "authors": ["Alex Young", "Marc Harter"],
            "categories": []
        }, {
            "id": 643,
            "title": "SonarQube in Action",
            "isbn": "1617290955",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-10-30T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/papapetrou.jpg",
            "status": "PUBLISH",
            "authors": ["G. Ann Campbell", "Patroklos P. Papapetrou"],
            "categories": []
        }, {
            "id": 644,
            "title": "Windows Store App Development: C# and XAML",
            "isbn": "1617290947",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-06-03T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pbrown3.jpg",
            "status": "PUBLISH",
            "authors": ["Peter M. Brown"],
            "categories": []
        }, {
            "id": 645,
            "title": "Learn Windows IIS in a Month of Lunches",
            "isbn": "1617290971",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-12-31T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/helmick.jpg",
            "status": "PUBLISH",
            "authors": ["Jason C. Helmick"],
            "categories": []
        }, {
            "id": 646,
            "title": "Mondrian in Action",
            "isbn": "161729098X",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/back.jpg",
            "status": "PUBLISH",
            "authors": ["William Back", "Nicholas Goodman", "", "Julian Hyde"],
            "categories": []
        }, {
            "id": 648,
            "title": "RabbitMQ in Depth",
            "isbn": "1617291005",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/roy.jpg",
            "status": "MEAP",
            "authors": ["Gavin M. Roy"],
            "categories": []
        }, {
            "id": 649,
            "title": "Akka in Action",
            "isbn": "1617291013",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/roestenburg.jpg",
            "status": "MEAP",
            "authors": ["Raymond Roestenburg", "Rob Bakker", "Rob Williams", "Steven Haines"],
            "categories": []
        }, {
            "id": 650,
            "title": "Extending jQuery",
            "isbn": "161729103X",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-08-12T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wood.jpg",
            "status": "PUBLISH",
            "authors": ["Keith B. Wood"],
            "categories": []
        }, {
            "id": 651,
            "title": "OCA Java SE 7 Programmer I Certification Guide",
            "isbn": "1617291048",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-04-02T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gupta.jpg",
            "status": "PUBLISH",
            "authors": ["Mala Gupta"],
            "categories": []
        }, {
            "id": 652,
            "title": "Kanban in Action",
            "isbn": "1617291056",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-03-04T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hammarberg.jpg",
            "status": "PUBLISH",
            "authors": ["Marcus Hammarberg", "Joakim Sunden"],
            "categories": []
        }, {
            "id": 653,
            "title": "Solr in Action",
            "isbn": "1617291021",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-03-25T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grainger.jpg",
            "status": "PUBLISH",
            "authors": ["Trey Grainger", "Timothy Potter"],
            "categories": []
        }, {
            "id": 655,
            "title": "Making Sense of NoSQL",
            "isbn": "1617291072",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-09-03T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mccreary.jpg",
            "status": "PUBLISH",
            "authors": ["Daniel G. McCreary", "Ann M. Kelly"],
            "categories": []
        }, {
            "id": 656,
            "title": "Jaguar Development with PowerBuilder 7",
            "isbn": "1884777864",
            "pageCount": 0,
            "publishedDate": {
                "$date": "1999-08-09T00:00:00.000-0700"
            },
            "status": "PUBLISH",
            "authors": ["MIchael Barlotta"],
            "categories": []
        }, {
            "id": 657,
            "title": "Grails in Action, Second Edition",
            "isbn": "1617290963",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gsmith2.jpg",
            "status": "MEAP",
            "authors": ["Glen Smith", "Peter Ledbrook"],
            "categories": []
        }, {
            "id": 658,
            "title": "Rails 4 in Action",
            "isbn": "1617291099",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bigg2.jpg",
            "status": "MEAP",
            "authors": ["Ryan Bigg", "Yehuda Katz", "and Steve Klabnik", ""],
            "categories": []
        }, {
            "id": 659,
            "title": "Learn Windows PowerShell in a Month of Lunches, Second Edition",
            "isbn": "1617291080",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-11-12T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones3.jpg",
            "status": "PUBLISH",
            "authors": ["Don Jones", "Jeffery D. Hicks"],
            "categories": []
        }, {
            "id": 662,
            "title": "AOP in .NET",
            "isbn": "1617291145",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-06-21T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/groves.jpg",
            "status": "PUBLISH",
            "authors": ["Matthew D. Groves"],
            "categories": []
        }, {
            "id": 663,
            "title": "Learn PowerShell Toolmaking in a Month of Lunches",
            "isbn": "1617291161",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-12-12T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones4.jpg",
            "status": "PUBLISH",
            "authors": ["Don Jones", "Jeffery Hicks"],
            "categories": []
        }, {
            "id": 664,
            "title": "CMIS and Apache Chemistry in Action",
            "isbn": "1617291153",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mueller.jpg",
            "status": "PUBLISH",
            "authors": ["Florian Müller", "Jay Brown", "Jeff Potts"],
            "categories": []
        }, {
            "id": 667,
            "title": "Action Guide (aka VB .NET)",
            "isbn": "1930110324",
            "pageCount": 0,
            "status": "PUBLISH",
            "authors": ["Paul Messick"],
            "categories": []
        }, {
            "id": 670,
            "title": "Learn Active Directory Management in a Month of Lunches",
            "isbn": "1617291196",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/siddaway3.jpg",
            "status": "PUBLISH",
            "authors": ["Richard Siddaway"],
            "categories": []
        }, {
            "id": 671,
            "title": "Spring in Action, Fourth Edition",
            "isbn": "161729120X",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls5.jpg",
            "status": "MEAP",
            "authors": ["Craig Walls"],
            "categories": []
        }, {
            "id": 672,
            "title": "The Mikado Method",
            "isbn": "1617291218",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-03-05T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ellnestam.jpg",
            "status": "PUBLISH",
            "authors": ["Ola Ellnestam", "Daniel Brolund"],
            "categories": []
        }, {
            "id": 676,
            "title": "The Responsive Web",
            "isbn": "1617291242",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/carver.jpg",
            "status": "MEAP",
            "authors": ["Matthew Carver"],
            "categories": []
        }, {
            "id": 677,
            "title": "Fast ASP.NET Websites",
            "isbn": "1617291250",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-08-29T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hume.jpg",
            "status": "PUBLISH",
            "authors": ["Dean Alan Hume"],
            "categories": []
        }, {
            "id": 678,
            "title": "SBT in Action",
            "isbn": "1617291277",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/suereth2.jpg",
            "status": "MEAP",
            "authors": ["Joshua Suereth", "Matthew Farwell"],
            "categories": []
        }, {
            "id": 679,
            "title": "PowerShell Deep Dives",
            "isbn": "1617291315",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hicks.jpg",
            "status": "PUBLISH",
            "authors": ["Edited by Jeffery Hicks", "Richard Siddaway", "Oisin Grehan", "", "Aleksandar Nikolic"],
            "categories": []
        }, {
            "id": 680,
            "title": "Gradle in Action",
            "isbn": "1617291307",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-02-18T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/muschko.jpg",
            "status": "PUBLISH",
            "authors": ["Benjamin Muschko"],
            "categories": []
        }, {
            "id": 681,
            "title": "Scalatra in Action",
            "isbn": "1617291293",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/carrero2.jpg",
            "status": "MEAP",
            "authors": ["Ivan Porto Carrero", "Ross A. Baker", "Dave Hrycyszyn", "Stefan Ollinger", "", "Jared Armstrong"],
            "categories": []
        }, {
            "id": 683,
            "title": "AngularJS in Action",
            "isbn": "1617291331",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bford.jpg",
            "status": "MEAP",
            "authors": ["Brian Ford", "Lukas Ruebbelke"],
            "categories": []
        }, {
            "id": 684,
            "title": "Software Development Metrics",
            "isbn": "1617291358",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nicolette.jpg",
            "status": "MEAP",
            "authors": ["David Nicolette"],
            "categories": []
        }, {
            "id": 685,
            "title": "F# Deep Dives",
            "isbn": "1617291323",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/petricek_trelford.jpg",
            "status": "MEAP",
            "authors": ["Tomas Petricek", "Phillip Trelford"],
            "categories": []
        }, {
            "id": 686,
            "title": "C# in Depth, Third Edition",
            "isbn": "161729134X",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-09-19T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeet3.jpg",
            "status": "PUBLISH",
            "authors": ["Jon Skeet"],
            "categories": []
        }, {
            "id": 688,
            "title": "PostGIS in Action, Second Edition",
            "isbn": "1617291390",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/obe2.jpg",
            "status": "MEAP",
            "authors": ["Regina Obe", "Leo Hsu"],
            "categories": []
        }, {
            "id": 689,
            "title": "R in Action, Second Edition",
            "isbn": "1617291382",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kabacoff2.jpg",
            "status": "MEAP",
            "authors": ["Robert Kabacoff"],
            "categories": []
        }, {
            "id": 691,
            "title": "The Joy of Clojure, Second Edition",
            "isbn": "1617291412",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-05-29T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/fogus2.jpg",
            "status": "PUBLISH",
            "authors": ["Michael Fogus", "Chris Houser"],
            "categories": []
        }, {
            "id": 692,
            "title": "iOS 7 in Action",
            "isbn": "1617291420",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-04-03T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lim2.jpg",
            "status": "PUBLISH",
            "authors": ["Brendan G. Lim", "Martin Conte Mac Donell"],
            "categories": []
        }, {
            "id": 693,
            "title": "Hello App Inventor!",
            "isbn": "1617291439",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/beer.jpg",
            "status": "MEAP",
            "authors": ["Paula Beer", "Carl Simmons"],
            "categories": []
        }, {
            "id": 696,
            "title": "Ember.js in Action",
            "isbn": "1617291455",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-06-10T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeie.jpg",
            "status": "PUBLISH",
            "authors": ["Joachim Haagen Skeie"],
            "categories": []
        }, {
            "id": 697,
            "title": "Netty in Action",
            "isbn": "1617291471",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/maurer.jpg",
            "status": "MEAP",
            "authors": ["Norman Maurer", "Courtney Robinson"],
            "categories": []
        }, {
            "id": 699,
            "title": "RavenDB in Action",
            "isbn": "1617291501",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/syn-hershko.jpg",
            "status": "MEAP",
            "authors": ["Itamar Syn-Hershko"],
            "categories": []
        }, {
            "id": 700,
            "title": "OCP Java SE 7 Programmer II Certification Guide",
            "isbn": "161729148X",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gupta2.jpg",
            "status": "MEAP",
            "authors": ["Mala Gupta"],
            "categories": []
        }, {
            "id": 702,
            "title": "Backbone.js in Action",
            "isbn": "1617291536",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/breed.jpg",
            "status": "MEAP",
            "authors": ["Samuel M. Breed", "Cole Krumbholz", "", "Phillip Whisenhunt"],
            "categories": []
        }, {
            "id": 703,
            "title": "Clojure in Action, Second Edition",
            "isbn": "1617291528",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rathore2.jpg",
            "status": "MEAP",
            "authors": ["Amit Rathore"],
            "categories": []
        }, {
            "id": 706,
            "title": "Practical Data Science with R",
            "isbn": "1617291560",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-04-02T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/zumel.jpg",
            "status": "PUBLISH",
            "authors": ["Nina Zumel", "John Mount"],
            "categories": []
        }, {
            "id": 707,
            "title": "Secrets of the JavaScript Ninja pBook upgrade",
            "pageCount": 0,
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": 711,
            "title": "ArcGIS Web Development",
            "isbn": "1617291617",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rubalcava.jpg",
            "status": "MEAP",
            "authors": ["Rene Rubalcava"],
            "categories": []
        }, {
            "id": 712,
            "title": "Elasticsearch in Action",
            "isbn": "1617291625",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hinman.jpg",
            "status": "MEAP",
            "authors": ["Radu Gheorghe", "Matthew Lee Hinman"],
            "categories": []
        }, {
            "id": 716,
            "title": "Learn SCCM 2012 in a Month of Lunches",
            "isbn": "1617291684",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bannan.jpg",
            "status": "MEAP",
            "authors": ["James Bannan"],
            "categories": []
        }, {
            "id": 717,
            "title": "Programming for Musicians and Digital Artists",
            "isbn": "1617291706",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kapur.jpg",
            "status": "MEAP",
            "authors": ["Ajay Kapur", "Perry Cook", "Spencer Salazar", "", "Ge Wang"],
            "categories": []
        }, {
            "id": 719,
            "title": "BDD in Action",
            "isbn": "161729165X",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/smart.jpg",
            "status": "MEAP",
            "authors": ["John F. Smart"],
            "categories": []
        }, {
            "id": 723,
            "title": "Windows Phone 8 in Action",
            "isbn": "1617291374",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-12-31T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/binkley.jpg",
            "status": "PUBLISH",
            "authors": ["Timothy Binkley-Jones", "Massimo Perga", "Michael Sync", "Adam Benoit"],
            "categories": []
        }, {
            "id": 724,
            "title": "Titanium Alloy in Action",
            "isbn": "1617291749",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alcocer.jpg",
            "status": "MEAP",
            "authors": ["Ricardo Alcocer"],
            "categories": []
        }, {
            "id": 727,
            "title": "Giraph in Action",
            "isbn": "1617291757",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/martella.jpg",
            "status": "MEAP",
            "authors": ["Claudio Martella", "Roman Shaposhnik", "", "Dionysios Logothetis"],
            "categories": []
        }, {
            "id": 728,
            "title": "The Well-Grounded Rubyist, Second Edition",
            "isbn": "1617291692",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-06-24T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black3.jpg",
            "status": "PUBLISH",
            "authors": ["David A. Black"],
            "categories": []
        }, {
            "id": 729,
            "title": "Go in Action",
            "isbn": "1617291781",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ketelsen.jpg",
            "status": "MEAP",
            "authors": ["Brian Ketelsen", "Erik St. Martin", "", "William Kennedy"],
            "categories": []
        }, {
            "id": 731,
            "title": "The Programmer's Guide to Apache Thrift ",
            "isbn": "1617291811",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/abernethy.jpg",
            "status": "MEAP",
            "authors": ["Randy Abernethy"],
            "categories": []
        }, {
            "id": 732,
            "title": "Grokking Functional Programming",
            "isbn": "1617291838",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/khan.jpg",
            "status": "MEAP",
            "authors": ["Aslam Khan"],
            "categories": []
        }, {
            "id": 733,
            "title": "CORS in Action",
            "isbn": "161729182X",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hossain.jpg",
            "status": "MEAP",
            "authors": ["Monsur Hossain"],
            "categories": []
        }, {
            "id": 736,
            "title": "Reactive Design Patterns",
            "isbn": "1617291803",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kuhn.jpg",
            "status": "MEAP",
            "authors": ["Roland Kuhn", "Jamie Allen"],
            "categories": []
        }, {
            "id": 740,
            "title": "Storm Applied",
            "isbn": "1617291897",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pathirana.jpg",
            "status": "MEAP",
            "authors": ["Sean Allen", "Peter Pathirana", "", "Matthew Jankowski"],
            "categories": []
        }, {
            "id": 743,
            "title": "Real-World Machine Learning",
            "isbn": "1617291927",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brink.jpg",
            "status": "MEAP",
            "authors": ["Henrik Brink", "Joseph Richards"],
            "categories": []
        }, {
            "id": 744,
            "title": "jQuery UI in Action",
            "isbn": "1617291935",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/vantoll.jpg",
            "status": "MEAP",
            "authors": ["Theodore J. (T.J.) VanToll III"],
            "categories": []
        }, {
            "id": 746,
            "title": "Web Components in Action",
            "isbn": "1617291943",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/buckett2.jpg",
            "status": "MEAP",
            "authors": ["Chris Buckett"],
            "categories": []
        }, {
            "id": 748,
            "title": "JavaScript Application Design",
            "isbn": "1617291951",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bevacqua.jpg",
            "status": "MEAP",
            "authors": ["Nicolas G. Bevacqua"],
            "categories": []
        }, {
            "id": 749,
            "title": "Git in Practice",
            "isbn": "1617291978",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mcquaid.jpg",
            "status": "MEAP",
            "authors": ["Mike McQuaid"],
            "categories": []
        }, {
            "id": 750,
            "title": "Impala in Action",
            "isbn": "1617291986",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/saltzer.jpg",
            "status": "MEAP",
            "authors": ["Richard L. Saltzer", "Istvan Szegedi"],
            "categories": []
        }, {
            "id": 751,
            "title": "Java 8 in Action",
            "isbn": "1617291994",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/urma.jpg",
            "status": "MEAP",
            "authors": ["Raoul-Gabriel Urma", "Mario Fusco", "", "Alan Mycroft"],
            "categories": []
        }, {
            "id": 753,
            "title": "Elixir in Action",
            "isbn": "161729201X",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/juric.jpg",
            "status": "MEAP",
            "authors": ["Saša Juric´"],
            "categories": []
        }, {
            "id": 755,
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": ["Kyle Banker", "Peter Bakkum", "Tim Hawkins", "Shaun Verch", "", "Douglas Garrett"],
            "categories": []
        }, {
            "id": 757,
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }, {
            "id": 761,
            "title": "jQuery in Action, Third Edition",
            "isbn": "1617292079",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/derosa.jpg",
            "status": "MEAP",
            "authors": ["Bear Bibeault", "Yehuda Katz", "", "Aurelio De Rosa"],
            "categories": []
        }, {
            "id": 764,
            "title": "D3.js in Action",
            "isbn": "1617292117",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/meeks.jpg",
            "status": "MEAP",
            "authors": ["Elijah Meeks"],
            "categories": []
        }, {
            "id": 765,
            "title": "Learn SQL Server Administration in a Month of Lunches",
            "isbn": "1617292133",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2014-05-02T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones5.jpg",
            "status": "PUBLISH",
            "authors": ["Don Jones"],
            "categories": []
        }, {
            "id": 766,
            "title": "Geoprocessing with Python",
            "isbn": "1617292141",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/garrard.jpg",
            "status": "MEAP",
            "authors": ["Chris Garrard"],
            "categories": []
        }, {
            "id": 767,
            "title": "Barcodes with iOS",
            "isbn": "161729215X",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drobnik.jpg",
            "status": "MEAP",
            "authors": ["Oliver Drobnik"],
            "categories": []
        }, {
            "id": 771,
            "title": "Chef in Action",
            "isbn": "1617292214",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/aivaliotis.jpg",
            "status": "MEAP",
            "authors": ["Dimitri Aivaliotis"],
            "categories": []
        }, {
            "id": 772,
            "title": "Hadoop in Practice, Second Edition",
            "isbn": "1617292222",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/holmes2.jpg",
            "status": "MEAP",
            "authors": ["Alex Holmes"],
            "categories": []
        }, {
            "id": 774,
            "title": "Oculus Rift in Action",
            "isbn": "1617292192",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bdavis.jpg",
            "status": "MEAP",
            "authors": ["Bradley Austin Davis", "Karen Bryla", "", "Alex Benton"],
            "categories": []
        }, {
            "id": 776,
            "title": "OpenStack in Action",
            "isbn": "1617292168",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bumgardner.jpg",
            "status": "MEAP",
            "authors": ["Cody Bumgardner"],
            "categories": []
        }, {
            "id": 777,
            "title": "PowerShell in Depth, Second Edition",
            "isbn": "1617292184",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones6.jpg",
            "status": "MEAP",
            "authors": ["Don Jones", "Jeffery Hicks", "", "Richard Siddaway"],
            "categories": []
        }, {
            "id": 785,
            "title": "Practical Probabilistic Programming",
            "isbn": "1617292338",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pfeffer.jpg",
            "status": "MEAP",
            "authors": ["Avi Pfeffer"],
            "categories": []
        }, {
            "id": 786,
            "title": "Unity in Action",
            "isbn": "161729232X",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hocking.jpg",
            "status": "MEAP",
            "authors": ["Joseph Hocking"],
            "categories": []
        }, {
            "id": 794,
            "title": "Express.js in Action",
            "isbn": "1617292427",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hahn.jpg",
            "status": "MEAP",
            "authors": ["Evan M. Hahn"],
            "categories": []
        }, {
            "id": 795,
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        }, {
            "id": 796,
            "title": "Understanding SPAs",
            "isbn": "1617292435",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/scott2.jpg",
            "status": "MEAP",
            "authors": ["Emmit A. Scott", "Jr."],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ad9d"
            },
            "title": "XSLT Quickly",
            "isbn": "1930110111",
            "pageCount": 320,
            "publishedDate": {
                "$date": "2001-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ducharme.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ad9e"
            },
            "title": "Windows Forms Programming with C#",
            "isbn": "1930110286",
            "pageCount": 752,
            "publishedDate": {
                "$date": "2002-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/eebrown.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ad9f"
            },
            "title": "Windows Forms in Action",
            "isbn": "1932394656",
            "pageCount": 950,
            "publishedDate": {
                "$date": "2006-04-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/eebrown2.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada0"
            },
            "title": "Event Processing in Action",
            "isbn": "1935182218",
            "pageCount": 384,
            "publishedDate": {
                "$date": "2010-08-15T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/etzion.jpg",
            "description": "Event Processing in Action is a ground-breaking book that introduces the major concepts of event driven architectures and shows you how to use, design, and build event processing systems and applications. The book looks at practical examples and provides an in-depth explanation of their architecture and implementation. Throughout the book, you'll follow a comprehensive use case that expert authors Opher Etzion and Peter Niblett construct step-by-step.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada1"
            },
            "title": "The Well-Grounded Java Developer",
            "isbn": "1617290068",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2012-07-10T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/evans.jpg",
            "description": "The Well-Grounded Java Developer is a unique guide written for developers with a solid grasp of Java fundamentals. It provides a fresh, practical look at new Java 7 features along with the array of ancillary technologies that a working developer will use in building the next generation of business software.    The book starts with thorough coverage of new Java 7 features. You'll then explore a cross-section of emerging JVM-based languages, including Groovy, Scala, and Clojure. Along the way, you'll find dozens of valuable development techniques showcasing modern approaches to concurrency and performance.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada2"
            },
            "title": "Objective-C Fundamentals",
            "isbn": "1935182536",
            "pageCount": 355,
            "publishedDate": {
                "$date": "2011-09-13T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/fairbairn.jpg",
            "description": "Objective-C for the iPhone is a hands-on tutorial that leads you from your first line of Objective-C code through the process of building native apps for the iPhone using the latest version of the SDK. While the book assumes you know your way around an IDE, no previous experience with Objective-C, the iPhone SDK, or mobile computing is required.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada3"
            },
            "title": "ADO.NET Programming",
            "isbn": "1930110294",
            "pageCount": 592,
            "publishedDate": {
                "$date": "2002-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/feldman.jpg",
            "description": "ADO.NET Programming covers database programming in .NET and illustrates important steps with nice examples. It shows you how you can achieve effortless separation of data presentation from data access; how to easily go from relational data to XML, and back; how to bind data directly to the Web and Windows Controls; how to write generic access code that talks to multiple databases without change; and much more.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada4"
            },
            "title": "WPF in Action with Visual Studio 2008",
            "isbn": "1933988223",
            "pageCount": 520,
            "publishedDate": {
                "$date": "2008-11-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/feldman2.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada5"
            },
            "title": "Location-Aware Applications",
            "isbn": "1935182331",
            "pageCount": 320,
            "publishedDate": {
                "$date": "2011-07-28T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ferraro.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada6"
            },
            "title": "Web Development with JavaServer Pages, Second Edition",
            "isbn": "193011012X",
            "pageCount": 800,
            "publishedDate": {
                "$date": "2001-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/fields2.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada7"
            },
            "title": "IntelliJ IDEA in Action",
            "isbn": "1932394443",
            "pageCount": 450,
            "publishedDate": {
                "$date": "2006-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/fields3.jpg",
            "description": "The purpose of this most excellent book is to get you up and running quickly. Perhaps more importantly, this book shows you how to use IDEA's multitude of powerful software development tools to their fullest advantage!       John R. Vacca, Author and IT Consultant",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada8"
            },
            "title": "Spring Integration in Action",
            "isbn": "1935182439",
            "pageCount": 400,
            "publishedDate": {
                "$date": "2012-09-19T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/fisher.jpg",
            "description": "Spring Integration in Action is a hands-on guide to Spring-based messaging and integration. After addressing the core messaging patterns, such as those used in transformation and routing, the book turns to the adapters that enable integration with external systems. Readers will explore real-world enterprise integration scenarios using JMS, Web Services, file systems, and email. They will also learn about Spring Integration's support for working with XML. The book concludes with a practical guide to advanced topics such as concurrency, performance, system-management, and monitoring.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06ada9"
            },
            "title": "The Joy of Clojure",
            "isbn": "1935182641",
            "pageCount": 360,
            "publishedDate": {
                "$date": "2011-03-25T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/fogus.jpg",
            "description": "The Joy of Clojure goes beyond just syntax to show you how to write fluent and idiomatic Clojure code. You'll learn a functional approach to programming and will master Lisp techniques that make Clojure so elegant and efficient. The book gives you easy access to hard soft ware areas like concurrency, interoperability, and performance. And it shows you how great it can be to think about problems the Clojure way.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adaa"
            },
            "title": "Dynamic WAP Application Development",
            "isbn": "1930110081",
            "pageCount": 888,
            "publishedDate": {
                "$date": "2002-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/foo.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adab"
            },
            "title": "IronPython in Action",
            "isbn": "1933988339",
            "pageCount": 496,
            "publishedDate": {
                "$date": "2009-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/foord.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adac"
            },
            "title": "Art of Java Web Development",
            "isbn": "1932394060",
            "pageCount": 624,
            "publishedDate": {
                "$date": "2003-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ford.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adad"
            },
            "title": "Java Reflection in Action",
            "isbn": "1932394184",
            "pageCount": 300,
            "publishedDate": {
                "$date": "2004-10-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/forman.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adae"
            },
            "title": "Programming Windows Server 2003",
            "isbn": "1930110987",
            "pageCount": 328,
            "publishedDate": {
                "$date": "2003-08-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/foster.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adaf"
            },
            "title": "Struts Recipes",
            "isbn": "1932394249",
            "pageCount": 520,
            "publishedDate": {
                "$date": "2004-11-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/franciscus.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb0"
            },
            "title": "Hello! iOS Development",
            "isbn": "1935182986",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2013-07-28T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/franco.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb1"
            },
            "title": "Jess in Action",
            "isbn": "1930110898",
            "pageCount": 480,
            "publishedDate": {
                "$date": "2003-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/friedman-hill.jpg",
            "description": "Jess in Action first introduces rule programming concepts and teaches you the Jess language. Armed with this knowledge, you then progress through a series of fully-developed applications chosen to expose you to practical rule-based development. The book shows you how you can add power and intelligence to your Java software",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb2"
            },
            "title": "Remote LAN Access",
            "isbn": "134944518",
            "pageCount": 300,
            "publishedDate": {
                "$date": "1996-06-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/fritz.jpg",
            "description": "Remote LAN Access will help you cut through the haze typically encountered when designing and installing remote LAN connections.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb3"
            },
            "title": "J2EE and XML Development",
            "isbn": "1930110308",
            "pageCount": 304,
            "publishedDate": {
                "$date": "2002-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gabrick.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb4"
            },
            "title": "Eclipse in Action",
            "isbn": "1930110960",
            "pageCount": 416,
            "publishedDate": {
                "$date": "2003-05-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gallardo.jpg",
            "description": "Eclipse in Action provides a thorough guide to using Eclipse features and plugins effectively in the context of real-world Java development. Realistic examples demonstrate how to use Eclipse effectively to build, test and debug applications using the tools provided by Eclipse and other third-party open source plugins. The reader will learn how to use plugin tools for using Eclipse in a team environment, including using Ant for more sophisticated build processes and CVS for source control. Plugin-ins for building web applications, using J2EE technologies, such as JSP/Servlets and EJB, are also discussed.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb5"
            },
            "title": "ASP.NET AJAX in Action",
            "isbn": "1933988142",
            "pageCount": 570,
            "publishedDate": {
                "$date": "2007-09-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gallo.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb6"
            },
            "title": "Ext JS in Action",
            "isbn": "1935182110",
            "pageCount": 425,
            "publishedDate": {
                "$date": "2010-12-05T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/garcia.jpg",
            "description": "Ext JS in Action teaches the reader about Ext from the ground up. By following the common design patterns demonstrated in the Ext source and in many commercial applications, the book teaches you to achieve the same results you see in world-class commercial JavaScript applications. This book will guide you through the Ext component model and layouts. You'll learn how core components, such as the Container class, serve as building blocks for building complex user interfaces. The book fully covers Ext utility classes, AJAX, Observable (the Ext events model), DOM helpers and Function Helpers and illustrates how use of JavaScript Object Notation (JSON), a powerful and lightweight data format, can allow your application to efficiently communicate over the network to the web server. Finally, you'll build on this foundation to customize or extend Ext widgets.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb7"
            },
            "title": "Sencha Touch in Action",
            "isbn": "1617290378",
            "pageCount": 375,
            "publishedDate": {
                "$date": "2013-07-12T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/garcia2.jpg",
            "description": "Sencha Touch in Action is the definitive guide to developing applications with Sencha Touch. You'll begin with the basic design principles for building great mobile applications, and then explore the features of Sencha Touch that bring those ideas to life. You'll learn how and why objects operate in the framework as you work through several real-world examples. This book also promotes the emerging best practices for mobile web development, from widget implementation to developing an application with the Sencha Touch MVC framework.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb8"
            },
            "title": "DSLs in Action",
            "isbn": "1935182455",
            "pageCount": 376,
            "publishedDate": {
                "$date": "2010-12-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ghosh.jpg",
            "description": "DSLs in Action introduces the concepts and definitions a developer needs to build high-quality domain specific languages. It provides a solid foundation to the usage as well as implementation aspects of a DSL, focusing on the necessity of applications speaking the language of the domain. After reading this book, a programmer will be able to design APIs that make better domain models. For experienced developers, the book addresses the intricacies of domain language design without the pain of writing parsers by hand.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adb9"
            },
            "title": "Database Programming for Handheld Devices",
            "isbn": "1884777856",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2000-07-01T00:00:00.000-0700"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gorgani.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adba"
            },
            "title": "Jakarta Commons Online Bookshelf",
            "isbn": "1932394524",
            "pageCount": 402,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adbb"
            },
            "title": "Browsing with HttpClient",
            "isbn": "1932394524a-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal1.jpg",
            "description": "Written for developers and architects with real work to do, the Jakarta Commons Online Bookshelf is a collection of 14 PDF modules, each focused on one of the main Commons components. Commons is a collection of over twenty open-source Java tools broadly ranging from logging, validation, bean utilities and XML parsing. The Jakarta Commons Online Bookshelf summarizes the rationale behind each component and then provides expert explanations and hands-on examples of their use. You will learn to easily incorporate the Jakarta Commons components into your existing Java applications.",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }, {
            "id": {
                "$oid": "53c2ae8528d75d572c06adbc"
            },
            "title": "Codec: Encoders and Decoders",
            "isbn": "1932394524j-e",
            "pageCount": 0,
            "publishedDate": {
                "$date": "2005-03-01T00:00:00.000-0800"
            },
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal10.jpg",
            "status": "PUBLISH",
            "authors": [],
            "categories": []
        }
]

const booksData = books.map((item)=>{ 
    if(item.description){
        item.description = item?.description?.split(' ').slice(0,5).join(' ');
    }
    const newItem = {
        id:item.id,
        title:item.title,
        isbn:item.isbn,
        authors:item.authors[0],
        review: Math.random().toFixed(2)*100,
    }
    return newItem
})

module.exports = booksData;