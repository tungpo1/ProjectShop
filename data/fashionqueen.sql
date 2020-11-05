-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2020 at 04:24 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fashionqueen`
--

-- --------------------------------------------------------

--
-- Table structure for table `homeproduct`
--

CREATE TABLE `homeproduct` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `img` text NOT NULL,
  `rate` int(11) NOT NULL,
  `descrip` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount_price` decimal(10,0) NOT NULL,
  `numProduct` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `homeproduct`
--

INSERT INTO `homeproduct` (`id`, `name`, `img`, `rate`, `descrip`, `price`, `discount_price`, `numProduct`) VALUES
(1, 'Emulsion shoes', 'https://i.ibb.co/mcR3w1h/sp1.png', 4, 'Summer High 10.5CM Heels Women Pumps Ankle Cross Strap Sandals Shoes Woman Ladies Peep Toe High Heels Dress Party Shoes Woman', '400', '350', 123),
(2, 'Red high heels', 'https://i.ibb.co/QX60ZYt/sp2.png', 5, 'Punk Style Platform Women Ankle Boots Women\'s Motorcycle Boot Fashion Ladies Chunky Shoes Metal Decor Black BIG size 41 43 44', '450', '390', 103),
(3, 'Back strap shoes', 'https://i.ibb.co/Yk61yJb/sp3.png', 5, 'Whatever the occasion, SIMMI has a pair of shoes for it. Inspired by the strong and powerful women you see every day, the brand’s range of footwear is unapologetically bold – just how we like it. We’re serving up an edit of its buckled stilettos, embellished sandals and printed heels for you to strap into.', '360', '340', 254),
(4, 'Princess shoes', 'https://i.ibb.co/bPs0VDQ/sp4.png', 4, 'Women Boots 2020 Fashion Waterproof Snow Boots For Winter Shoes Women Casual Lightweight Ankle Botas Mujer Warm Winter Boots', '599', '520', 300),
(5, 'Eye color palette', 'https://i.ibb.co/nf6CbcB/sp5.png', 5, 'Make your statement truly stylish with our bold green all over peacock printed midi dress. This flattering fashion silhouette nods to one-of-a-kind design. Designed with a stylish slit for that added detailing, working perfectly with chunky boots. 100% Polyester. Machine wash.', '230', '200', 250),
(6, 'Diagonal bag', 'https://i.ibb.co/d6gGtGY/sp6.png', 4, 'Our green buckle nylon cross body bag has dynamic detail that is sure to elevate your outfit to the next level. Everybody needs a cross body! 100% Polyester.', '340', '310', 35),
(7, 'Makeup bag', 'https://i.ibb.co/4FzfdmS/sp7.png', 4, 'This oxblood coloured trophy cross body bag is the perfect autumn winter accessory update your edit needs to complete any look. 100% Polyurethane.', '250', '210', 68),
(8, 'Backpack cross', 'https://i.ibb.co/ts4x1Ph/sp8.png', 4, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '320', '299', 167);

-- --------------------------------------------------------

--
-- Table structure for table `listproduct`
--

CREATE TABLE `listproduct` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `img` text NOT NULL,
  `rate` int(11) NOT NULL,
  `descrip` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount_price` decimal(10,0) NOT NULL,
  `numProduct` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `listproduct`
--

INSERT INTO `listproduct` (`id`, `name`, `img`, `rate`, `descrip`, `price`, `discount_price`, `numProduct`) VALUES
(10, 'Backless', 'https://i.ibb.co/d6mrZ6H/1.png', 4, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '360', '340', 167),
(11, 'Diagonal bag', 'https://i.ibb.co/Mh2sfLg/2.png', 5, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '450', '420', 78),
(12, 'LifeStride', 'https://i.ibb.co/1QDPTq6/3.png', 4, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '350', '249', 96),
(13, 'Padded shoe', 'https://i.ibb.co/nRF3spB/4.png', 5, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '620', '529', 94),
(14, 'Back strap shoes', 'https://i.ibb.co/Mh2sfLg/2.png', 4, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '360', '339', 220),
(15, 'Sports shoes', 'https://i.ibb.co/JqQnydh/6.png', 5, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '450', '399', 154),
(16, 'Bow sandals', 'https://i.ibb.co/1QDPTq6/3.png', 5, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '340', '299', 213),
(17, 'High heel', 'https://i.ibb.co/d6mrZ6H/1.png', 4, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal', '420', '399', 99),
(18, 'Red high heels', 'https://i.ibb.co/xH3D3Bm/9.png', 5, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '360', '339', 100),
(19, 'Madden Girl', 'https://i.ibb.co/nRmn2Qh/10.png', 3, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '320', '299', 210),
(20, 'Boots', 'https://i.ibb.co/H28f4L3/11.png', 3, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '349', '299', 55),
(21, 'Princess shoes', 'https://i.ibb.co/wcPyRdz/12.png', 5, 'Opt for metallic accessories like this multicoloured fun water bottle to keep your water lovely and chilled. 100% Metal.', '600', '499', 10);

-- --------------------------------------------------------

--
-- Table structure for table `subscribes`
--

CREATE TABLE `subscribes` (
  `id` int(11) NOT NULL,
  `email` text CHARACTER SET utf8 NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscribes`
--

INSERT INTO `subscribes` (`id`, `email`, `created_at`, `updated_at`) VALUES
(4, 'sontung11@gmail.com', '2020-11-03', '2020-11-03'),
(5, 'sdvcv@gmail.com', '2020-11-03', '2020-11-03');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `id` int(100) NOT NULL,
  `Username` varchar(100) CHARACTER SET utf8 NOT NULL,
  `Email` text CHARACTER SET utf8 NOT NULL,
  `Phone` text NOT NULL,
  `Subject` text NOT NULL,
  `Message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`id`, `Username`, `Email`, `Phone`, `Subject`, `Message`) VALUES
(2, 'Nguyen VAn A', 'asdasd@gmail.com', '789451201', 'zxczxcz', 'asdfafasdsssss'),
(3, 'sdfgfg', 'sdfsdf', 'xzcvxcvxcv', 'xcvxcv', 'xcvxcv'),
(6, 'iopiop', 'kjl', ',.m,.', ',m..', 'uiouo'),
(10, 'tung son', 'sontungbk1112@gmail.com', '+84966750087', 'rwqrwq', 'rwqrwq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `homeproduct`
--
ALTER TABLE `homeproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listproduct`
--
ALTER TABLE `listproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribes`
--
ALTER TABLE `subscribes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `homeproduct`
--
ALTER TABLE `homeproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `listproduct`
--
ALTER TABLE `listproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `subscribes`
--
ALTER TABLE `subscribes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
