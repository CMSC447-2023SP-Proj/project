-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: social
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userID` int NOT NULL,
  `postID` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `postID_idx` (`postID`),
  KEY `commentUserID_idx` (`userID`),
  CONSTRAINT `commentUserID` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `postID` FOREIGN KEY (`postID`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'test','2023-04-27 15:03:55',27,15),(2,'comment test','2023-04-27 15:04:11',27,16),(3,'testest','2023-05-02 16:03:03',28,17),(4,'test comment','2023-05-02 16:05:32',28,18),(5,'test','2023-05-02 16:33:51',28,19);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `likeUserId_idx` (`userId`),
  KEY `likePostId_idx` (`postId`),
  CONSTRAINT `likePostId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likeUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(45) DEFAULT NULL,
  `img` varchar(45) DEFAULT NULL,
  `userID` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userID_idx` (`userID`),
  CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Test','',18,'2023-04-20 13:31:01'),(2,'WOWOWOW!!','',18,'2023-04-20 13:31:06'),(3,'',NULL,18,'2023-04-20 13:31:12'),(4,'so cool','',18,'2023-04-20 13:31:23'),(5,'Contragulations UMBC class of 2023!!!','',18,'2023-04-20 13:35:12'),(6,'test','',19,'2023-04-20 16:00:14'),(7,'Sup!','',19,'2023-04-20 16:54:50'),(8,'',NULL,19,'2023-04-20 16:55:50'),(9,'hello world','',19,'2023-04-20 17:28:39'),(10,'fthftjt',NULL,19,'2023-04-20 17:29:03'),(11,'wanna get internship','',26,'2023-04-22 09:37:59'),(12,'potato','',26,'2023-04-22 09:39:41'),(13,'cool!!!!!!','',26,'2023-04-22 09:39:51'),(14,'I\'m gonna be rich one day','',27,'2023-04-24 10:21:33'),(15,'',NULL,27,'2023-04-27 14:32:04'),(16,'post test','',27,'2023-04-27 15:04:05'),(17,'test','',28,'2023-05-02 16:02:56'),(18,'Yoooooo','',28,'2023-05-02 16:05:24'),(19,'test','',28,'2023-05-02 16:33:44');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relationships`
--

DROP TABLE IF EXISTS `relationships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relationships` (
  `id` int NOT NULL AUTO_INCREMENT,
  `followerUserId` int NOT NULL,
  `followedUserId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `followerUser_idx` (`followerUserId`),
  KEY `followedUser_idx` (`followedUserId`),
  CONSTRAINT `followedUser` FOREIGN KEY (`followedUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `followerUser` FOREIGN KEY (`followerUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relationships`
--

LOCK TABLES `relationships` WRITE;
/*!40000 ALTER TABLE `relationships` DISABLE KEYS */;
/*!40000 ALTER TABLE `relationships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stories`
--

DROP TABLE IF EXISTS `stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(200) NOT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `storyUserId_idx` (`userID`),
  CONSTRAINT `storyUserId` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `profilePic` varchar(100) DEFAULT NULL,
  `major` varchar(45) DEFAULT NULL,
  `gradYear` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test123','test@gmail.com','$2a$10$jcMfG927rNJ0jPj5sBMoV.66Jd3TmJX4g/C6XvyOudwufprtTHefW','Parsons',NULL,NULL,NULL),(2,'test1234','test2@gmail.com','$2a$10$4lS7Rv87hWuId9uFB72oQOkn8TwGgurnPxsQr8Ao9SQdfYWWXAAMS','Boroumand',NULL,NULL,NULL),(3,'Cheeryohs','hearthealthy@gmail.com','$2a$10$cRmZglmHB3jFwWA08bWR7uFGK0SM4oafHcsnIS3PiAUSqU2/WdBHy','Parsons',NULL,NULL,NULL),(4,'MuAngel','puchy0205@gmail.com','$2a$10$6z66/ZHqCSPUkV1djyc83ehHG1.lGTk.NNULYnRT.Upa/tI7Vxk4C','Parsons',NULL,NULL,NULL),(5,'ERobins','erobins@gmail.com','$2a$10$4uFYeDec9hXEhNZaj75cB.pYge.KnznFxoYx08ilxh7H/lPof2tvq','Robinson',NULL,NULL,NULL),(6,'mparson1','mparson1@umbc.edu','$2a$10$kWgd.hOnkiJYyuGlM2/OA.hIuVJGK0BL2zKGwnsqqbHS5oUcwoAqS',NULL,NULL,NULL,NULL),(7,'matt','matt@gmail.com','$2a$10$yot0WxXO8mC6tRoPdTkw8.FieGx7eyYXszMB2zgfe.fs2SxwBplv2','Parsons',NULL,NULL,NULL),(8,'Admin','admin','$2a$10$BhLbmoM5u4M3NFDJ79D8zOAFhkEGcjWPyDvrWueeH.hh/6VBB7BWS',NULL,NULL,NULL,NULL),(9,'Admin1','admin','',NULL,NULL,NULL,NULL),(10,'Admin3','admin','',NULL,NULL,NULL,NULL),(11,'Admin4','admin','',NULL,NULL,NULL,NULL),(12,'test','test','',NULL,NULL,NULL,NULL),(13,'admin5','admin5@gmail.com','',NULL,NULL,NULL,NULL),(14,'admin6','admin6@gmail.com','admin',NULL,NULL,NULL,NULL),(15,'admin7','admin7@gmail.com','$2a$10$yiZmAIeHqgc7CgyjleWqXeOa1Fjfa529TCZ3JijiPMiDnlFOl/mJO','Admin Matt',NULL,NULL,NULL),(16,'admin8','admin8@umbc.edu','$2a$10$8M09RNSVeyF5W6u1dYXJA.eYdOup9GKX8DxW8Tg0aIDd8lFEGLuNe','Matt Admin',NULL,NULL,NULL),(17,'test4','test4@umbc.edu','$2a$10$rWNldSZK0febDeA81Y/NZenWKriWKftcxJpKgK/uaWF4wyBuoTDka','Test 4',NULL,NULL,NULL),(18,'Administrator','administrator@umbc.edu','$2a$10$xQr3AWmbWkS1FWWyzE6HK.t/cTTn.0N239GMwP6i3o64M9W6widaC','Admin Matt',NULL,NULL,NULL),(19,'will','will@umbc.edu','$2a$10$r0L.1rLVNSH.VkpK0DyHQOIsHFeAB83j6o2VzMKiAjS5qmELOFGhK','Will',NULL,NULL,NULL),(20,'','','$2a$10$RBuWlA5KDrNQ./bfjY4ow.2h/OXo8g9R9Sxn1luyM01t2jt63f5We','',NULL,NULL,NULL),(21,'test5','teset5@gmail.com','$2a$10$OoVFBQJ1G4LsILVD0qbYXeBa3nzFacaRNSXVEcEd3C5t9FY6WzYFC','test5',NULL,NULL,NULL),(22,'a','a@gmail.com','$2a$10$Jn/v1XU5WmQCTSjwLu2fiO0LEaAks/tok/Ptj6ImAS4sZUyKzQAp2','a',NULL,NULL,NULL),(23,'b','b@umbc.edu','$2a$10$ALcLrPZvVE6erarPs.gxb.p8H/6MqlXrYD2Ut4SZEpvNGLy6W/SaG','B',NULL,NULL,NULL),(24,'Edward','edward@umbc.edu','$2a$10$cCfK/Dan1glHSdh4.RhyruYhELFb986Z8nbT3f.g9MsPHh1pxjs2y','Edward',NULL,NULL,NULL),(25,'test7','test7@umbc.edu','$2a$10$Vl4aHMo/s17PXjZkWlLLm.8Sb7HA1xJEILH4rXaWCJusmntD7HexK','Test7',NULL,NULL,NULL),(26,'Cindy','cindy@umbc.edu','$2a$10$kE.bLlAFOt8OZ52Fi6WfW.SO/MhrYctEinPLk21JX3w9mu9YxcPw2','Cindy Um',NULL,NULL,NULL),(27,'Franco','frnco@umbc.edu','$2a$10$fVa7leZKo5spEkHxdHEc4eDWGsbuQExnwcYYsCPo3womyW8C.0uuC','Franco Maxey',NULL,NULL,NULL),(28,'Admin10','admin10@umbc.edu','$2a$10$ISfe7/ET4Xp7k42629Hql.95vmX26aTwZuNTkCEqpXE.EOp5M89kG','Matt Parsons',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02 16:42:46
