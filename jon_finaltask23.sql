-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 13, 2021 at 03:33 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jon_finaltask23`
--

-- --------------------------------------------------------

--
-- Table structure for table `artis`
--

CREATE TABLE `artis` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `old` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `startCareer` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artis`
--

INSERT INTO `artis` (`id`, `name`, `old`, `type`, `startCareer`, `createdAt`, `updatedAt`) VALUES
(1, 'Bon Jovi', 25, 'Band', 1983, '2021-07-13 00:00:00', '2021-07-13 00:00:00'),
(2, 'Queen', 41, 'Band', 1970, '2021-07-13 00:00:00', '2021-07-13 00:00:00'),
(3, 'Adele', 31, 'Solois', 2006, '2021-07-12 23:26:57', '2021-07-12 23:26:57'),
(4, 'ksdlk', 34, 'Solois', 2001, '2021-07-12 23:50:23', '2021-07-12 23:50:23'),
(5, 'lnflsndf', 6786, 'knsdn', 87384, '2021-07-12 23:54:12', '2021-07-12 23:54:12'),
(6, 'lljfda', 676, 'nskdfn', 78, '2021-07-12 23:54:30', '2021-07-12 23:54:30'),
(7, 'lkzlkv', 68, 'sdkn', 7687686, '2021-07-12 23:56:33', '2021-07-12 23:56:33'),
(8, 'jdlakjd', 87823, '99823', 8929873, '2021-07-13 00:01:56', '2021-07-13 00:01:56');

-- --------------------------------------------------------

--
-- Table structure for table `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `attache` varchar(255) DEFAULT NULL,
  `artisId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `music`
--

INSERT INTO `music` (`id`, `title`, `year`, `thumbnail`, `attache`, `artisId`, `createdAt`, `updatedAt`) VALUES
(1, 'Never Say Good By', '1986', 'img1.jpg', 'neversaygoodby.mp3', 1, '2021-07-13 00:00:00', '2021-07-13 00:00:00'),
(2, 'Bohemian Rhapsody', '1975', 'img2.jpg', 'bohemianrhapsody.mp3', 2, '2021-07-13 00:00:00', '2021-07-13 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20210706115457-create-user.js'),
('20210712222718-create-artis.js'),
('20210712225740-create-music.js'),
('20210713012813-create-transaction.js');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `startDate` varchar(255) DEFAULT NULL,
  `dueDate` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `attache` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fullname`, `gender`, `phone`, `address`, `createdAt`, `updatedAt`) VALUES
(3, 'contohemail1@email.com', '$2b$10$wmlSYHI4y5.TBnOfgUbTFOnirgprEtquOilCGKDSMze3Bb.6nldnC', 'adfasd asdkf', 'akhad', '083898378923775', 'khjklasd', '2021-07-08 19:46:21', '2021-07-08 19:46:21'),
(4, 'kjhasdf@email.com', '$2b$10$yFdkkjB8.eKENexzyp4nr.uh194PXY1cmUv/PBFLlxB0Mx.gEApgu', 'sdkhf', 'akdh', '0827392734', 'jnsdkfngsdfg', '2021-07-08 22:05:43', '2021-07-08 22:05:43'),
(5, 'coba1@email.com', '$2b$10$puLGtVBK0kewlfMYzx.Z7OvNtsGMiAqxNBVsf/wq4lSlLwZQXEc7y', 'lmflas', 'lakmsdkf', '0816486234', 'ksdfaskf', '2021-07-09 15:32:47', '2021-07-09 15:32:47'),
(6, 'coba2@email.com', '$2b$10$v.3P28gqa4Hpw4HKm/fnYeWRVcz9F1LMouLrWdYa5f2aTGJVTgbSu', 'Jon H', 'Male', '0811687341234', 'Tanggerang Selatan', '2021-07-09 15:36:27', '2021-07-09 15:36:27'),
(7, 'coba3@email.com', '$2b$10$gigwM/MYI9RkmqsZQBG03Oxq2mxnwSCKxpPCYrN8XrkeYpGl2SdVC', 'Sundus', 'Male', '081886385683', 'Kota Tanggerang', '2021-07-09 16:17:34', '2021-07-09 16:17:34'),
(8, 'coba4@email.com', '$2b$10$z0HrLcNdvTgbFolliowBu.qXnOVR9WFB116sjyPLz89Q82KILMQH.', 'adfasd asdkf', 'akhad', '083898378923775', 'khjklasd', '2021-07-09 19:10:01', '2021-07-09 19:10:01'),
(9, 'coba5@email.com', '$2b$10$mt0xo9re9oX9JmIIMZarueuxQZRPadI8lCFoXJufPugOkZWgl2m0C', 'adfasd asdkf', 'akhad', '083898378923775', 'khjklasd', '2021-07-09 19:11:12', '2021-07-09 19:11:12'),
(10, 'coba6@email.com', '$2b$10$DVG5Hs7.0m03bWt2eJ8a8eLJCgfz7siDZlin0kxDb8/X9neMYiO6q', 'adfasd asdkf', 'akhad', '083898378923775', 'khjklasd', '2021-07-09 19:12:39', '2021-07-09 19:12:39'),
(11, 'coba7@email.com', '$2b$10$9JITS0GWMhaSDh3mycsNme6tmN4zwis0ap/axMmX4XfukrM9Ytq2C', 'adfasd asdkf', 'akhad', '083898378923775', 'khjklasd', '2021-07-09 19:13:35', '2021-07-09 19:13:35'),
(12, 'coba9@email.com', '$2b$10$pD0eZcRxdgVxfTgtIxPVqu6TDDtfRZJMNY6k4ic6jfx1fNpFdrTHG', 'Jon Heri', 'Female', '0887256236458764', 'Padang Panjang', '2021-07-09 19:58:41', '2021-07-09 19:58:41'),
(13, 'admin@email.com', '$2b$10$olTwOU6xxt8xOlO71da8K.kj.nulX.fHqoz9X1JjuJzGK/Vorui.O', 'Admin1', 'Laki-laki', '083898378923775', 'khjklasd', '2021-07-12 00:37:21', '2021-07-12 00:37:21'),
(14, 'coba11@email.com', '$2b$10$daQDXScKulKAlBrYARF6y.CuvYTrB3R2v1giGqatgwO7f4uqujpd2', 'Jon JJ', 'Male', '081836871632', 'Tanggerang Selatan', '2021-07-12 20:45:21', '2021-07-12 20:45:21'),
(15, 'coba21@email.com', '$2b$10$hk9wxmDpvKjMxVRk6r9wNeCmlaMSwGhSEu4Mb1ZGCOBBLNlW31z1S', 'sknkd', 'sndkgfn', '098799872938752983', 'nvbndcv', '2021-07-12 23:57:48', '2021-07-12 23:57:48'),
(16, 'coba212@email.com', '$2b$10$7YQM3gtw5A8bvfNogQ4duemeT4x.ZXCnlw/t3Fe3YaWLUObiY33cy', 'nknkdnkvn', 'sndkn', '098738578787234', 'bsfbsdfgbgabd', '2021-07-12 23:58:57', '2021-07-12 23:58:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artis`
--
ALTER TABLE `artis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artisId` (`artisId`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artis`
--
ALTER TABLE `artis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `music`
--
ALTER TABLE `music`
  ADD CONSTRAINT `music_ibfk_1` FOREIGN KEY (`artisId`) REFERENCES `artis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
