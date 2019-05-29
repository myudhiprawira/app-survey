-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 29, 2019 at 11:35 AM
-- Server version: 10.1.37-MariaDB-1
-- PHP Version: 7.2.9-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysql-survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(6) NOT NULL,
  `code` varchar(8) NOT NULL,
  `question` varchar(1000) DEFAULT NULL,
  `answer` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `code`, `question`, `answer`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'which of the following are fruit?\r\na. lettuce\r\nb. tomato\r\nc. cauliflower\r\nd. cucumber', 'b', '2019-05-28 14:18:01', '2019-05-28 14:18:01'),
(2, 'test', 'which of the following are not anarchist?\r\na. Peter Kropotkin\r\nb. Mikhail Bakunin\r\nc. Pierre-Joseph Proudhon\r\nd. Vera Karelina', 'd', '2019-05-28 14:18:48', '2019-05-28 14:18:48'),
(3, 'test2', 'which of the following are not american car manufacturer?\r\na. chevrolet\r\nb. oldsmobile\r\nc. holden\r\nd. panoz', 'c', '2019-05-28 14:22:11', '2019-05-28 14:22:11'),
(4, 'test2', 'Where is the Trafalgar Cemetery located? a. England b. Holland c. Gibraltar d. Luxembourg', 'c', '2019-05-28 08:17:07', '2019-05-28 08:32:10');

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
('20190528050314-create-survey-code.js'),
('20190528070848-create-questions.js'),
('20190528094456-create-submission.js');

-- --------------------------------------------------------

--
-- Table structure for table `submissions`
--

CREATE TABLE `submissions` (
  `id` int(6) NOT NULL,
  `code` varchar(8) NOT NULL,
  `score` float DEFAULT NULL,
  `answers` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `submissions`
--

INSERT INTO `submissions` (`id`, `code`, `score`, `answers`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 0, 'da', '2019-05-28 16:58:54', '2019-05-28 14:01:20'),
(2, 'test2', 100, 'cc', '2019-05-28 12:07:07', '2019-05-28 12:07:07'),
(3, 'test', 100, 'bd', '2019-05-28 12:10:06', '2019-05-28 12:10:06'),
(4, 'test2', 0, 'dd', '2019-05-28 12:10:26', '2019-05-28 12:10:26');

-- --------------------------------------------------------

--
-- Table structure for table `surveyCodes`
--

CREATE TABLE `surveyCodes` (
  `id` int(6) NOT NULL,
  `code` varchar(8) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `surveyCodes`
--

INSERT INTO `surveyCodes` (`id`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'test', '2019-05-28 12:42:24', '2019-05-28 12:42:24'),
(14, 'test2', '2019-05-28 07:19:44', '2019-05-28 07:19:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `surveyCodes`
--
ALTER TABLE `surveyCodes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `surveyCodes`
--
ALTER TABLE `surveyCodes`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
