-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 26, 2023 at 09:33 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacationsdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `userId` int(11) NOT NULL,
  `vacationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`userId`, `vacationId`) VALUES
(13, 30),
(13, 35),
(13, 38),
(13, 41),
(13, 42),
(13, 43),
(13, 44),
(13, 45),
(13, 46),
(13, 47),
(14, 30),
(14, 38),
(14, 43),
(14, 45),
(14, 47),
(14, 50),
(21, 30),
(21, 35),
(21, 42),
(21, 45),
(21, 48),
(22, 30),
(22, 35),
(22, 45),
(22, 48),
(23, 30),
(23, 35),
(23, 40),
(23, 41),
(23, 42),
(23, 43),
(23, 45),
(24, 30),
(24, 35),
(24, 41),
(24, 45),
(25, 30),
(25, 35),
(25, 40),
(25, 42),
(25, 45),
(25, 47),
(26, 38),
(26, 45),
(26, 47),
(26, 48),
(27, 40),
(27, 44),
(29, 35),
(29, 45),
(31, 45),
(31, 46),
(33, 30),
(33, 38),
(33, 45),
(34, 38),
(34, 40),
(34, 41),
(34, 45),
(34, 46),
(34, 47),
(34, 48);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `email`, `password`, `role`) VALUES
(5, 'Bart', 'Simpson', 'barti@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'Admin'),
(6, 'Lisa', 'Simpson', 'lisa@gmail.com', '', 'User'),
(8, 'Homer', 'Simpson', 'Homer@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(9, 'Margie', 'Simpson', 'Margir@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(10, 'Michael', 'Vernik', 'michael@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'Admin'),
(11, 'Dabbie', 'Simpson', 'Dabbie@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(12, 'Michael', 'Johns', 'Johns@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(13, 'Donald', 'Trump', 'trump@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(14, 'Joe', 'Bidin', 'biden@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(15, 'Michael', 'Michael', 'Michael1@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(16, 'фафаыа', 'фпфыфыфыпф', 'agasgasgasgas', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(17, 'Michael', 'Vaf', 'mail@gmail.com', '9a7e84d7b7e6e6d0889f8fc2cae3f5a88bf8eed22c4388d889bb244cc467e6d9720cdd9ac159a777b2cffc7a7d26701b591f18fc9f5e493f3fc437956f377c34', 'User'),
(18, 'afafaf', 'aafasfasf', 'asfasfasfשכשכש', 'ca8c6befb81ea3ed9b7403860f8b619c99a4fab01c8e5a73f67815a55d9bfc2dfb8f01cef00d4301d3e7e5a2e1439ded19efde29024db7b8b183325cef2877bb', 'User'),
(19, 'asfasf', 'asfasf', 'akgmfa@gmaol.com', '7a8a41d24f44ad1940b529b28c16471c04c5c468a64cc5ff32e36c72fb90971c6c4f435d8dbeba68d55731f8da7b6759cad433d8ca9dba03f4cb003bce16fc70', 'User'),
(20, 'asfasfasf', 'asfasgasg', 'agkmasgasg@gmail.com', '591a5fa8a65b801ad3aa45094fb508b7aad142fe8664f3714cf851f30d3b8d836003a19430966d363525f978a6bee4911fc086a043d5ae89679f191676cb286d', 'User'),
(21, 'Michael', 'Vernik', 'micha@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(22, 'Bush', 'Jorge', 'bush@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(23, 'Clinton', 'Bill', 'Bill@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(24, 'Ronald', 'Reagan', 'Ronald@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(25, 'Kennedy', 'John', 'John@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(26, 'Maxim', 'Leskov', 'maxim@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(27, 'Anya', 'Zhuchenko', 'anya@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(28, 'asfasfasf', 'asfasf', 'safs@gmaa.org.il', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(29, 'afsafasf', 'asfasfas', 'chexk@google.org.il', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(30, 'homer', 'simpson', 'homr@simn.gov.ca.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(31, 'Wo', 'Hu', 'w@co.co', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(32, 'Mora', 'Bor', 'ar@gmai.com', '591a5fa8a65b801ad3aa45094fb508b7aad142fe8664f3714cf851f30d3b8d836003a19430966d363525f978a6bee4911fc086a043d5ae89679f191676cb286d', 'User'),
(33, 'Din', 'Vinchester', 'vinchester@gmail.com', 'dd6ff49baeb6802c954201a4216f690810451a9991247ebe7fd62556bc68218071c7e27de059fecde889215a9a5c17f30d8c87f03c339818fbaa61ca18cd756b', 'User'),
(34, 'asfasfkasgasgasgasg', 'asgasgasgasasg', 'asfasf@gamgasngiajsgjasbghibgasgasngojasg.com', 'beafcc5e8fe758bdc55ce86121de5fa19e7f853dac863a5ee51cdefdc95f393ff0f77cc0d5ff2c4e569f1a752b0bd75b0318d70e105054508534fd0940ff2be7', 'User');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `vacationId` int(11) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `imageName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacationId`, `destination`, `description`, `startDate`, `endDate`, `price`, `imageName`) VALUES
(30, 'Paris', 'The capital of France seems to have been designed specifically for the enjoyment of its visitors. Its streets, squares, buildings, gardens, and monuments beckon tourists to return, and indeed, many do. Some of the most memorable things to do in Paris include visiting the Eiffel Tower, the Arc de Triomphe, and Notre Dame Cathedral. During the evening, experiencing one of the legendary Moulin Rouge cabaret shows, strolling through some of the most picturesque neighborhoods, like Montmartre, or climbing the Montparnasse Tower is a must.', '2023-03-01', '2023-03-06', '500.00', '702d9c7f-22cb-49b7-8454-5c719004f76d.jpg'),
(35, 'Tel Aviv', 'A youthful, modern metropolis with a diverse population, Tel Aviv dates back only to 1909. Clubs, bars, a thriving arts community, gay life and beaches attract artists, musicians and young professionals to Tel Aviv\'s more secular scene. Its UNESCO-designated Bauhaus architecture has won the city the moniker \"The White City.\" Walk, drive or catch cabs between the cultural exhibition pavilions of Haaretz Museum, historic Independence Hall Museum, bustling Carmel Market and Old Jaffa\'s boardwal', '2023-02-26', '2023-03-04', '999.00', '88a83f72-541c-4df2-8c78-54144bf2d48e.jpg'),
(38, 'London', 'Often the best way to see a city is to be guided by a local, and London’s no different. Whether you want to hurtle down the Thames at nearly 30 knots (that’s fast, FYI), get up close and personal with some east London street art, or see the capital\'s sights and world-famous attractions on an open-top bus, only a fully-fledged Londoner has all the juiciest bits of city info. Lucky for all soon-to-be sightseers, there\'s expertise and opportunity knocking around every corner – so London\'s got you covered. To get you started, here\'s our pick of the best London tours. It\'s time to see the capital in a whole new way. No guidebook needed. From the tops of buses to bikes to speedboats, your point of view of the big smoke will be forever changed. ', '2023-02-23', '2023-03-01', '350.00', '8c167df9-d834-4f13-b52a-f8af89212137.webp'),
(40, 'Hallstatt', 'Hallstatt is known as Austria’s most photogenic town, and it won’t take long for you to understand why. In fact, the cultural landscape of the entire Hallstatt-Dachstein/Salzkammergut region is listed as a UNESCO World Heritage Site. This tiny lakeside village in the state of Upper Austria has only 800 residents, yet receives a ton of tourists during the day. Visitors fall in love with the incredible natural beauty and serenity of the area, and you undoubtedly will too!', '2023-05-05', '2023-05-08', '550.00', 'b9ceb9a9-fc85-4cf0-b68a-8879284bf8af.webp'),
(41, 'Havana', 'African and Caribbean influences can be felt throughout. The traditional Spanish architecture, classic American cars, and tropical climate all contribute to the charm of this city, which is sometimes referred to as the Rome of the Caribbean.  Visit Havana for the culture, music, food, festivals, and gorgeous sights. Simply strolling through the streets of the Cuban capital is a magical experience.', '2023-03-14', '2023-03-31', '1500.00', '55dfbfd4-a44f-4f14-a110-e5a8634ff48f.jpeg'),
(42, 'Venice', 'Delve into Venetian history on this tour that showcases two of the city\'s most iconic structures and sheds light on the stories behind them both. Enjoy skip-the-line access to both popular attractions. Your first stop is legendary St. Mark\'s Basilica. Wander around the mosaic-covered interior and Byzantine treasures while a local guide fills you in on how this collection came to be. Enjoy the stunning view on Piazza San Marco with your special access to St Marks\' balcony, then continue to the Doge’s Palace to explore the former political heart of Venice.', '2023-03-01', '2023-03-05', '400.00', 'd918d9e9-63dd-44af-9abb-f00e9c944687.webp'),
(43, 'The Jura', 'There’s a tiny French region just west of the border with Switzerland that’s producing some big, big wines. he Jura also boasts a comté cheese trail — as if the région weren’t French enough — that connects no fewer than 150 fromageries and dairy farms. Hiking in the Jura Mountains, through Baume-les-Messieurs village and to the Hérisson waterfalls, is equally enticing, particularly as an antidote to all the wine- and cheese-focused sightseeing.', '2023-02-18', '2023-03-01', '700.00', 'b8244c11-2127-40e6-a0d9-0ccb2c76482a.jpeg'),
(44, 'Copenhagen', 'The eternally cool city will highlight its prowess with all things design, as the official UNESCO World Capital of Architecture in 2023. Venues across Copenhagen — contemporary parks, starchitect-designed skyscrapers, even typically humdrum infrastructure like playgrounds — will host events and visitors for a look at the future of the urban environment. One highlight will be the Copenhill Power Plant, the cleanest waste-to-energy plant in the world — that’s also the site of an artificial ski slope. “We’re going to do a lot of open-house events where 50 different venues are going to be open to the public that are usually closed to visitors,” said Copenhagen’s city architect Camilla van Deurs, who mentioned as examples churches; bridges; and the Danmarks Nationalbank, the central bank building planned in part by Danish design legend Arne Jacobsen. “Superkilen,” van Deurs said, “is a playground for kids and adults — and a cultural hub in the middle of Nørrebro, the most ethnically mixed n', '2023-03-05', '2023-03-12', '800.00', '255e0383-030c-4375-bbe4-9a9224627847.webp'),
(45, 'Coastal Ecuador', 'Many travelers know the historic capital city of Quito and the incredibly biodiverse Galápagos Islands, but now\'s the time to visit Ecuador’s stunning Pacific coastline. From surf towns like Montañita to the preserved beaches and cloud forest of Machalilla National Park, coastal Ecuador is packed with outdoor adventures and stunning scenery. Kontiki Expeditions unlocks the region with eight-day yacht cruises that visit five of the country’s 24 provinces, hitting destinations including Isla de la Plata and Salinas. A member of Small Luxury Hotels of the World, Kontiki Expeditions operates an intimate ship with just nine staterooms, refined outdoor and indoor spaces, and a nearly 1:1 crew-to-guest ratio. (Guests can book an individual room, or charter the entire 18-passenger yacht.) Getting there has gotten smoother, too: U.S. airlines including American, JetBlue, and Spirit now offer direct flights to Guayaquil, from which Kontiki Expeditions trips depart', '2023-02-25', '2023-03-03', '2500.00', '8932043c-1e82-401a-9517-cd1c8d884122.webp'),
(46, 'Berlin', 'n fact, the city is best known for its striking contrasts. Historical buildings stand alongside modern architecture as the past and present intermingle. The sights Berlin has to offer, from the Brandenburg Gate to the Chancellor\'s Office, bear witness to the history of an entire nation. Germany\'s capital is home to all the main government buildings, including the historical Reichstag building as the seat of the German parliament.  Berlin is the city of art, artists and museums. In fact, precious artefacts from all over the world are showcased at more than 170 museums here, some of which can be found on the internationally renowned Museum Island. Berlin is a popular destination for classical music fans from every corner of the globe thanks to its leading orchestras, such as the globally popular Berlin Philharmonic, and the city\'s three huge opera houses, where spectacular operas and ballets are performed. And there is no end of theatre venues specialising in variety performances, revue', '2023-05-02', '2023-05-08', '700.00', '8ea2b2e8-b5b5-4bae-ad76-8e8e64e66844.jpg'),
(47, 'Rome', 'Rome, the city of seven hills, enjoyed a mythic beginning. Romulus and Remus – twin brothers who were nursed by a she-wolf and fathered by a war god – reportedly founded the Eternal City. And although historians are a little skeptical about this epic entry into the world, most travelers are absolutely certain that there is something magical about Rome. Whether it\'s the mystery of nearby Vatican City or the ghosts of the Colosseum, an afternoon caffè on Piazza Navona or a piled-high plate of pasta at a trattoria, Roma is sure to enchant.', '2023-02-21', '2023-02-28', '300.00', '469453c8-4c7b-4c9b-ac13-e4f5f054e3fb.jpg'),
(48, 'Balli', 'There is no other place like Bali in this world. A magical blend of culture, people, nature, activities, weather, culinary delights, nightlife, and beautiful accommodation. Bali is rated as one of the best travel destinations in the world by countless websites, review portals, and travel magazines each year – for very good reasons. Whatever your age, background, budget or interest, there is something great for everyone to explore and discover. And that’s a promise.There is no other place like Bali in this world. A magical blend of culture, people, nature, activities, weather, culinary delights, nightlife, and beautiful accommodation. Bali is rated as one of the best travel destinations in the world by countless websites, review portals, and travel magazines each year – for very good reasons. Whatever your age, background, budget or interest, there is something great for everyone to explore and discover. And that’s a promise.There is no other place like Bali in this world.', '2023-03-08', '2023-03-31', '4000.00', 'e43e48a9-3de3-45be-b5ac-1ef059d350ba.jpg'),
(50, 'Chamonix', 'At the heart of the Haute-Savoie, in the Valley of Chamonix-Mont-Blanc, your dreams about nature and mountains come true. Experience the Aiguille du Midi, discover the stories of the pionniers of alpinism and ski on the magical slopes of our 5 ski station in front of the mont Blanc.\r\n\r\n', '2023-02-26', '2023-03-07', '1000.00', 'dbe0beb8-460f-445a-9d3e-f7199a3d1e28.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`userId`,`vacationId`),
  ADD KEY `vacationId` (`vacationId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`vacationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`vacationId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
