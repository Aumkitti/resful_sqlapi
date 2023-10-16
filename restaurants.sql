-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2023 at 05:53 AM
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
-- Database: `resterant`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `type` varchar(300) NOT NULL,
  `imge` varchar(300) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`id`, `name`, `type`, `imge`) VALUES
(1, '9 กุ้งอบ ปูอบ - GrabKitchen วนิลามูน', 'อาหารเส้น, อาหารทะเล, ข้าวหน้า, อาหารตามสั่ง, สตรีทฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_w…054643cb9f46e74661270953_1683694332212432284.webp'),
(2, 'Korean Toast Sandwich by Jam - GrabKitchen วนิลามูน', 'เบรคฟาสต์/บรั๊นช์, Coupon, สตรีทฟู้ด, ทานเล่น/ขนมขบเคี้ยว, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C332LP2XNKVDG6/hero/c87aebd9ea4c4a64ad8e92fe39b552a8_1674709197550775964.webp'),
(3, 'มิว เปาะเปี๊ยสดหน้าปู - ถนนพรานนก', 'สตรีทฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2VBR242WF4YCA/hero/8022a4a7bddd46d090407bea5f9da7d1_1624506054129442137.webp'),
(4, 'Koji japanese food - พระราม 5', 'สตรีทฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2LJJ66FNTWYNA/hero/97d45766-7fd9-4085-bdf6-962ad18a0232__store_cover__2023__06__10__13__02__00.webp'),
(5, 'Young Yum - ลาวัณย์อพาร์ทเม้นต์', 'สตรีทฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C2UTN2XHFF51ET/hero/eb706257773947b8a4aca8619643c9aa_1629360404607155935.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
