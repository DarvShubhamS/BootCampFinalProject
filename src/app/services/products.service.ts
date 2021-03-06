import { Injectable } from "@angular/core";


@Injectable()
export class ProductsService {

    products = [
        {
            "id": "GGOEGHPB071610",
            "name": "Google Twill Cap",
            "description": "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
            "features": "Heavy weight brushed twill\nAdjustable velcro closure\nOne size fits all.",
            "price": "10.99",
            "keywords": "Google Twill Cap, Google Cap, Google Twill Caps, Google Twill, google cap, google caps, google twill, google twill black cap, google black caps, google caps, black caps, Google Caps",
            "url": "Google+Twill+Cap",
            "category": "apparel",
            "subcategory": "apparel",
            "models": [
                "red",
                "blue",
                "black"
            ],
            "averageRating": 4,
            "totalReviews": 14,
            "reviews": [
                {
                    "user": "raj",
                    "review": "Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt",
                    "rating": 4.5
                },
                {
                    "user": "sam",
                    "review": "Tempus curabitur faucibus auctor bibendum duis gravida tincidunt litora himenaeos facilisis vivamus vehicula potenti semper fusce suspendisse sagittis!",
                    "rating": 4
                }
            ],
            "quantity": 1
        },
        {
            "id": "GGOEGHPJ094299",
            "name": "Google Fold-over Beanie",
            "description": "Keep you ears warm while enjoying a cold winter day with this Google Fold-over Beanie.",
            "features": "100% acrylic\nOne size fits all.",
            "price": "9.99",
            "keywords": "Google Fold-over Beanie Grey, gray beanie, grey beanie, Google Beanies, Fold over grey, Google Beanie Grey, Google headgear",
            "url": "Google+Fold+over+beanie+grey",
            "category": "apparel",
            "subcategory": "apparel",
            "models": [
                "red",
                "blue",
                "black",
                "gray"
            ],
            "averageRating": 4.5,
            "totalReviews": 10,
            "reviews": [
                {
                    "review": "Convallis turpis porttitor sapien ad urna efficitur dui vivamus in praesent nulla hac non potenti!",
                    "rating": 5,
                    "user": "daniel"
                },
                {
                    "review": "Habitasse scelerisque class quam primis convallis integer eros congue nulla proin nam faucibus parturient.",
                    "rating": 4,
                    "user": "wilson"
                }
            ],
            "quantity": 1
        },
        {
            "id": "GGOEWXXX0827",
            "name": "Waze Women's Short Sleeve Tee",
            "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
            "features": "Jersey knit\n37.5% cotton, 50% polyester, 12.5% rayon.\nMade in the USA.",
            "price": "18.99",
            "keywords": "Waze Women's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Women's Tees, Waze Women's tee, waze ladies tees, waze ladies tee, waze short sleeve tees, waze short sleeve tee",
            "url": "Waze+Womens+Short+Sleeve+Tee",
            "category": "apparel",
            "subcategory": "apparel",
            "models": [
                "pink",
                "yellow",
                "purple"
            ],
            "averageRating": 4.8,
            "totalReviews": 18,
            "reviews": [
                {
                    "review": "Cras consequat fames faucibus ac aliquam dolor a euismod porttitor rhoncus venenatis himenaeos montes tristique pretium libero nisi!",
                    "rating": 5,
                    "user": "ragul"
                },
                {
                    "review": "Laoreet justo volutpat per etiam donec at augue penatibus eu facilisis lorem phasellus ipsum tristique urna quam platea.",
                    "rating": 5,
                    "user": "netallie"
                }
            ]
        },
        {
            "id": "GGOEWXXX0828",
            "name": "Waze Men's Short Sleeve Tee",
            "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
            "features": "Jersey knit\n37.5% cotton, 50% polyester, 12.5% rayon.\nMade in the USA.",
            "price": "18.99",
            "keywords": "Waze Men's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Men's Tees, Waze Men's tee, waze mens tees, waze mens tee, waze short sleeve tees, waze short sleeve tee",
            "url": "Waze+Mens+Short+Sleeve+Tee",
            "category": "apparel",
            "subcategory": "apparel",
            "models": [
                "white",
                "blue",
                "green"
            ],
            "averageRating": 3,
            "totalReviews": 15,
            "reviews": [
                {
                    "review": "Senectus lectus eleifend ex lobortis cras nam cursus accumsan tellus lacus faucibus himenaeos posuere!",
                    "rating": 4,
                    "user": "willow"
                },
                {
                    "review": "Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!",
                    "rating": 3,
                    "user": "daniel"
                }
            ]
        },
        {
            "id": "GGOEGBRJ037399",
            "name": "Google Rucksack",
            "description": "Choose to carry your belongings and presentations to your next meeting with the Google Mistral Rucksack!",
            "features": "Size: 13.5 x 6.5 x 17.5.\nErgonomic padded shoulder straps.\nLarge main compartment with internal laptop compartment.\nEasy Snap and Adjustable straps for main compartment access.",
            "price": "79.99",
            "keywords": "Mistral Rucksack, Mistral backpack, Mistral Backpack, backpack, bags, bag, Backpack, backpacks, packs, office gear, Bag, Bags, Google Backpack, google backpack, g, google",
            "url": "Google+Rucksack",
            "category": "bags",
            "subcategory": "bags",
            "models": [
                "brown",
                "black"
            ],
            "averageRating": 3.5,
            "totalReviews": 4,
            "reviews": [
                {
                    "review": "Pretium vel inceptos fringilla sit dui fusce varius gravida platea morbi semper erat elit porttitor potenti!",
                    "rating": 2.8,
                    "user": "shashank"
                },
                {
                    "_id": "5c8a37b114eb5c17645c9111",
                    "review": "Ex a bibendum quis volutpat consequat euismod vulputate parturient laoreet diam sagittis amet at blandit.",
                    "rating": 4,
                    "user": "wayne"
                }
            ]
        },
        {
            "id": "GGOEGDHJ087399",
            "name": "Google Rolltop Backpack",
            "description": "This stylish Google rolltop backpack will help keep all of your favorite items organized and together while you're on the move.",
            "features": "Size: 12 inches wide x 18.5 inches height x 5.3 inches depth.\nTPU Liner.\nInternal Organizer for Pens, Phones and Other Small Items.\nLarge Main Compartment.\nFlap Closure for Quick Access or Roll-Top for Expandable Volume and Weather Protection.",
            "price": "149.99",
            "keywords": "Google Rolltop Backpack , google backpack, google blue backpack, blue rolltop, Google rolltop, Blue Backpack, backpack, rolltop",
            "url": "Google+Rolltop+Backpack+Blue",
            "category": "bags",
            "subcategory": "bags",
            "models": [
                "black",
                "blue"
            ],
            "averageRating": 4.9,
            "totalReviews": 10,
            "reviews": [
                {
                    "review": "Auctor euismod interdum augue tristique senectus nascetur cras justo eleifend mattis libero id adipiscing amet placerat",
                    "rating": 5,
                    "user": "mohit"
                },
                {
                    "_id": "5c8a37dd14eb5c17645c9113",
                    "review": "A facilisi justo ornare magnis velit diam dictumst parturient arcu nullam rhoncus nec!",
                    "rating": 4,
                    "user": "keshav"
                }
            ]
        },
        {
            "id": "GGOEGDHH087299",
            "name": "Google Thermal Bottle",
            "description": "Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.",
            "features": "Double wall construction.\nStainless steel thermal bottle with copper vacuum insulation.\nThreaded stainless steel lid.",
            "price": "23.99",
            "keywords": "Google Thermal Bottle Green, Google, google thermal bottle green, Google Green, Thermal Bottle Green,",
            "url": "Google+Thermal+Bottle+Green",
            "category": "drinkware",
            "subcategory": "drinkware",
            "models": [
                "blue",
                "green",
                "gray"
            ],
            "averageRating": 4.2,
            "totalReviews": 28,
            "reviews": [
                {
                    "review": "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
                    "rating": 4,
                    "user": "sanjeev"
                },
                {
                    "review": "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
                    "rating": 3.9,
                    "user": "abhishek"
                }
            ]
        },
        {
            "id": "GGOEGXXX0887",
            "name": "Google Standard Onesie Grey",
            "description": "This Google onesie moves with your baby with non-binding sleeves for full freedom of movement.",
            "features": "100% cotton.\nSnaps at crotch.\nNon-binding sleeves and neck.",
            "price": "25.99",
            "keywords": "Google Standard Onesie Grey, google grey onesie, google standard grey onesie, standard onesie grey, google onesie",
            "url": "Google+Standard+Onesie+Grey",
            "category": "apparel",
            "subcategory": "kid's",
            "models": [
                "small",
                "large",
                "medium"
            ],
            "averageRating": 5,
            "totalReviews": 11,
            "reviews": [
                {
                    "review": "Semper blandit felis nostra facilisi sodales pulvinar habitasse diam sapien lobortis urna nunc ipsum orci.",
                    "rating": 5,
                    "user": "raghav"
                },
                {
                    "review": "Neque amet vel integer placerat ex pretium elementum vitae quis ullamcorper nullam nunc habitant cursus justo!!!",
                    "rating": 5,
                    "user": "samuel"
                }
            ]
        },
        {
            "id": "GGOEGAAX0037",
            "name": "Google Sunglasses",
            "description": "Although these are no Google glasses, they will still make your day fun at the beach!",
            "features": "Made of Polycarbonate Material.\nUV400 Lenses Provide 100% UVA And UVB Protection.\nCome in the following colors: White, Green, Blue.",
            "price": "3.50",
            "keywords": "Malibu Sunglasses, sunglasses, apparel, fun, Malibu sunglasses, sunglass, sun, weather glasses, weather, Weather, Google, g, google, google malibu sunglasses, Google Malibu sunglasses",
            "url": "Malibu+Sunglasses",
            "category": "accessories",
            "subcategory": "lifestyle",
            "models": [
                "greenshade",
                "whiteshade",
                "bluehshade"
            ],
            "averageRating": 4.6,
            "totalReviews": 25,
            "reviews": [
                {
                    "review": "Sollicitudin sagittis ex ut fringilla enim condimentum et netus tristique.",
                    "rating": 5,
                    "user": "felicity"
                },
                {
                    "review": "Semper tempus curae at platea lobortis ullamcorper curabitur luctus maecenas nisl laoreet!",
                    "rating": 4.8,
                    "user": "stark"
                }
            ]
        },
        {
            "id": "GGOEAOCB092799",
            "name": "Android Large Trace Journal Black",
            "description": "This Android Large Trace Journal provides an escape and a chance to write down your latest inspirations!",
            "features": "Smooth Hardcover.\nWhite, College Ruled Pages.\nElastic Band Closure.\nRibbon Marker.\nGusseted Back Pocket.\nSize: Medium, 5.5 x 8.25 inch.",
            "price": "15.99",
            "keywords": "Android Large Trace Journal Black, android large journals, large trace journals, android large journals, android black journals, android large journals",
            "url": "Android+Large+Trace+Journal+Black",
            "category": "office",
            "subcategory": "notebooks & Journals",
            "models": [
                "100 pages",
                "200 pages",
                "350 pages"
            ],
            "averageRating": 4.1,
            "totalReviews": 4,
            "reviews": [
                {
                    "review": "Arcu adipiscing lobortis sem finibus consequat ac justo nisi pharetra ultricies facilisi!",
                    "rating": 4,
                    "user": "steve"
                },
                {
                    "review": "Rutrum viverra turpis nunc ultricies dolor ornare metus habitant ex quis sociosqu nascetur pellentesque quam!",
                    "rating": 5,
                    "user": "peggy"
                }
            ]
        },
        {
            "id": "GGOEGGOA017399",
            "name": "Maze Pen",
            "description": "Attending a meeting will never be the same! This fun-filled maze pen features two small metal balls that move through the maze.",
            "features": "Contains two metal balls that move through the maze.\nMedium point black refill.",
            "price": "0.99",
            "keywords": "Pen, Pens, pen, pens, Maze Pen, Maze Pens, pack of pens, pack of Maze Pens, pack of maze pens, writing utensil, writing utensils, ink pen, ink pens, Ink pen, Ink Pens, Pen writes in ink, fun pen, office, Office, offices, Offices, Google Maze Pens, Google maze pen, Google Maze Pens",
            "url": "Maze+Pen",
            "category": "office",
            "subcategory": "office",
            "models": [
                "red",
                "black",
                "green"
            ],
            "averageRating": 5,
            "totalReviews": 14,
            "reviews": [
                {
                    "review": "Elementum massa porttitor enim vitae eu ligula vivamus amet imperdiet urna tristique donec mattis mus erat.",
                    "rating": 5,
                    "user": "naveen"
                },
                {
                    "review": "Fusce ullamcorper gravida libero nullam lacus litora class orci habitant sollicitudin...",
                    "rating": 5,
                    "user": "rajdeep"
                }
            ]
        },
        {
            "id": "GGOEGOLC014299",
            "name": "Google Metallic Notebook Set",
            "description": "A stunning notebook set that will inspire all writers! Notebooks for every subject for hassle-free note-taking during classes or lectures.",
            "features": "Spiral bound 70-page lined notebook with 2.0 mm thick solid metallic textured cover.\nElastic pen strap, includes color coordinating.\nEconomy Stylus with black ink and capacitive touch stylus.",
            "price": "5.99",
            "keywords": "Blue Metallic Textured Spiral Notebook Set , Mercury Notebook Sets, notebook, notebooks, journal, journals, google mercury notebook set, mercury notebooks, office, office supplies",
            "url": "Google+Metallic+Notebook+Set",
            "category": "office",
            "subcategory": "office",
            "models": [
                "marvel",
                "Dc"
            ],
            "averageRating": 4.9,
            "totalReviews": 60,
            "reviews": [
                {
                    "review": "Varius potenti proin hendrerit felis sit convallis nunc non id facilisis aliquam platea elementum",
                    "rating": 5,
                    "user": "vikky"
                },
                {
                    "review": "Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit ultricies dapibus",
                    "rating": 4.5,
                    "user": "sanjeev"
                }
            ]
        }
    ]
}


