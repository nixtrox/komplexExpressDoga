-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2024. Már 24. 18:44
-- Kiszolgáló verziója: 10.4.21-MariaDB
-- PHP verzió: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `JatekKonzolok`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `Konzolok`
--

CREATE TABLE `Konzolok` (
  `Id` int(11) NOT NULL,
  `Name` varchar(1000) NOT NULL,
  `Brand` varchar(1000) NOT NULL,
  `Price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `Konzolok`
--

INSERT INTO `Konzolok` (`Id`, `Name`, `Brand`, `Price`) VALUES
(1, 'Xbox Series S', 'Microsoft/Xbox', 250000),
(2, 'PlayStation 5', 'Sony', 250000),
(3, 'PlayStation 4', 'Sony', 120000),
(4, 'PlayStation 4', 'Sony', 120000),
(5, 'Nintendo Switch', 'Nintendo', 120000),
(6, 'Igen', 'Nem', 2000000);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `Konzolok`
--
ALTER TABLE `Konzolok`
  ADD PRIMARY KEY (`Id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `Konzolok`
--
ALTER TABLE `Konzolok`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
