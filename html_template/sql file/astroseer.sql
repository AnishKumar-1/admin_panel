-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2023 at 08:50 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `astroseer`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `astrologer`
--

CREATE TABLE `astrologer` (
  `id` int(11) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `mobile_number` varchar(13) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `experience` int(30) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `system_knows` varchar(30) DEFAULT NULL,
  `language_knows` varchar(25) DEFAULT NULL,
  `catagories` varchar(30) DEFAULT NULL,
  `short_bio` varchar(500) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'pending',
  `profilepic` varchar(300) NOT NULL,
  `about` varchar(300) NOT NULL,
  `insta_link` varchar(300) DEFAULT NULL,
  `youtube_link` varchar(300) DEFAULT NULL,
  `fb_link` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `astrologer`
--

INSERT INTO `astrologer` (`id`, `gender`, `name`, `password`, `mobile_number`, `email`, `experience`, `city`, `system_knows`, `language_knows`, `catagories`, `short_bio`, `status`, `profilepic`, `about`, `insta_link`, `youtube_link`, `fb_link`) VALUES
(7, 'male', 'Ramu', 'syam123', '8976542390', 'syam123@gmail.com', 10, 'jhansi', 'android', 'c++', 'frontend', 'nothing', 'pending', 'not present', 'hey', 'not now', 'not now', 'not now');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(300) NOT NULL,
  `name` varchar(300) NOT NULL,
  `mobileno` varchar(300) NOT NULL,
  `wallet` varchar(300) NOT NULL,
  `token` varchar(300) NOT NULL,
  `dob` varchar(300) NOT NULL,
  `profilepic` varchar(300) NOT NULL,
  `otp` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `mobileno`, `wallet`, `token`, `dob`, `profilepic`, `otp`) VALUES
(1, 'preet123@gmail.com', 'Preet', '8847213434', '90', '09', '1997-05-23', 'https://media.istockphoto.com/id/922962354/vector/no-image-available-sign.jpg?b=1&s=170667a&w=0&k=20&c=VqpxaeBt-p0q2JlujQV-0fmCsaD3NeP4mmOUX4uZEIc=', '9328'),
(3, 'gsinfotech303@gmail.com', 'Preetsingh', '8424951313', '0', '11', '2000-04-02', 'https://media.istockphoto.com/id/922962354/vector/no-image-available-sign.jpg?b=1&s=170667a&w=0&k=20&c=VqpxaeBt-p0q2JlujQV-0fmCsaD3NeP4mmOUX4uZEIc=', '9704'),
(4, 'singhtechnologies69@gmail.com', 'harpreet', '9821699942', '2', '12', '2002-11-09', 'https://media.istockphoto.com/id/922962354/vector/no-image-available-sign.jpg?b=1&s=170667a&w=0&k=20&c=VqpxaeBt-p0q2JlujQV-0fmCsaD3NeP4mmOUX4uZEIc=', '8740'),
(5, 'abhi123@gmail.com', 'abhisekh', '9636200000', '0', '3', '1999-06-26', 'https://media.istockphoto.com/id/922962354/vector/no-image-available-sign.jpg?b=1&s=170667a&w=0&k=20&c=VqpxaeBt-p0q2JlujQV-0fmCsaD3NeP4mmOUX4uZEIc=', '3083'),
(6, 'yash123@gmail.com', 'yash', '8986690761', '10', '10', '1998-08-29', 'https://media.istockphoto.com/id/922962354/vector/no-image-available-sign.jpg?b=1&s=170667a&w=0&k=20&c=VqpxaeBt-p0q2JlujQV-0fmCsaD3NeP4mmOUX4uZEIc=', '4660');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `astrologer`
--
ALTER TABLE `astrologer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `astrologer`
--
ALTER TABLE `astrologer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
