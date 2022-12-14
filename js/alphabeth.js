/*
Pong-JS
This is a modern JS reboot of the classic 1972 Atari game

Copyright (C) 2021  Ron Perkins - <hello@ronperkins.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
"use strict"

// Alphabeth used in the game
let alphabeth = {
  "A": [[1, 1, 1],[1, 0, 1],[1, 1, 1],[1, 0, 1],[1, 0, 1]],
  "B": [[1, 1, 0],[1, 0, 1],[1, 1, 0],[1, 0, 1],[1, 1, 0]],
  "C": [[0, 1, 1],[1, 0, 0],[1, 0, 0],[1, 0, 0],[0, 1, 1]],
  "D": [[1, 1, 0],[1, 0, 1],[1, 0, 1],[1, 0, 1],[1, 1, 0]],
  "E": [[1, 1, 1],[1, 0, 0],[1, 1, 0],[1, 0, 0],[1, 1, 1]],
  "F": [[1, 1, 1],[1, 0, 0],[1, 1, 0],[1, 0, 0],[1, 0, 0]],
  "G": [[1, 1, 1],[1, 0, 0],[1, 0, 1],[1, 0, 1],[1, 1, 1]],
  "H": [[1, 0, 1],[1, 0, 1],[1, 1, 1],[1, 0, 1],[1, 0, 1]],
  "I": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0]],
  "J": [[0, 0, 1],[0, 0, 1],[0, 0, 1],[1, 0, 1],[1, 1, 1]],
  "K": [[1, 0, 1],[1, 0, 1],[1, 1, 0],[1, 0, 1],[1, 0, 1]],
  "L": [[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 1, 1]],
  "M": [[1, 0, 1],[1, 1, 1],[1, 1, 1],[1, 0, 1],[1, 0, 1]],
  "N": [[1, 0, 1],[1, 1, 1],[1, 0, 1],[1, 0, 1],[1, 0, 1]], 
  "O": [[1, 1, 1],[1, 0, 1],[1, 0, 1],[1, 0, 1],[1, 1, 1]],
  "P": [[1, 1, 0],[1, 0, 1],[1, 1, 0],[1, 0, 0],[1, 0, 0]],
  "Q": [[1, 1, 1],[1, 0, 1],[1, 0, 1],[1, 1, 0],[0, 0, 1]],
  "R": [[1, 1, 0],[1, 0, 1],[1, 1, 1],[1, 1, 0],[1, 0, 1]],
  "S": [[0, 1, 1],[1, 0, 0],[0, 1, 0],[0, 0, 1],[1, 1, 0]],
  "T": [[1, 1, 1],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0]],
  "U": [[1, 0, 1],[1, 0, 1],[1, 0, 1],[1, 0, 1],[1, 1, 1]],
  "V": [[1, 0, 1],[1, 0, 1],[1, 0, 1],[1, 0, 1],[0, 1, 0]],
  "Y": [[1, 0, 1],[1, 0, 1],[0, 1, 0],[0, 1, 0],[0, 1, 0]],
  "X": [[1, 0, 1],[1, 0, 1],[0, 1, 0],[1, 0, 1],[1, 0, 1]],
  "W": [[1, 0, 1],[1, 0, 1],[1, 1, 1],[1, 1, 1],[1, 0, 1]],
  "Z": [[1, 1, 1],[0, 0, 1],[0, 1, 0],[1, 0, 0],[1, 1, 1]],
  "1": [[0, 1, 0],[1, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0]],
  "2": [[1, 1, 0],[0, 0, 1],[0, 1, 0],[1, 0, 0],[1, 1, 1]],
  "3": [[1, 1, 0],[0, 0, 1],[0, 1, 0],[0, 0, 1],[1, 1, 0]],
  "4": [[1, 0, 1],[1, 0, 1],[1, 1, 1],[0, 0, 1],[0, 0, 1]],
  "5": [[1, 1, 1],[1, 0, 0],[1, 1, 1],[0, 0, 1],[1, 1, 0]],
  "6": [[0, 1, 1],[1, 0, 0],[1, 1, 1],[1, 0, 1],[1, 1, 1]],
  "7": [[1, 1, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
  "8": [[1, 1, 1],[1, 0, 1],[1, 1, 1],[1, 0, 1],[1, 1, 1]],
  "9": [[1, 1, 1],[1, 0, 1],[1, 1, 1],[0, 0, 1],[0, 0, 1]],
  "0": [[1, 1, 1],[1, 0, 1],[1, 0, 1],[1, 0, 1],[1, 1, 1]],
  "!": [[1, 0, 0],[1, 0, 0],[1, 0, 0],[0, 0, 0],[1, 0, 0]],
  " ": [[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]],
  ".": [[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[1, 0, 0]],
  ",": [[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 1, 0],[1, 0, 0]],
  "'": [[0, 1, 0],[0, 1, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0]],
  "_": [[0, 0, 0],[0, 0, 0],[0, 0, 0],[0, 0, 0],[1, 1, 1]],
  "-": [[0, 0, 0],[0, 0, 0],[1, 1, 1],[0, 0, 0],[0, 0, 0]],
  "+": [[0, 0, 0],[0, 1, 0],[1, 1, 1],[0, 1, 0],[0, 0, 0]],
  "/": [[0, 0, 1],[0, 0, 1],[0, 1, 0],[1, 0, 0],[1, 0, 0]],
  "*": [[0, 0, 0],[1, 0, 1],[0, 1, 0],[1, 0, 1],[0, 0, 0]],
  "=": [[0, 0, 0],[1, 1, 1],[0, 0, 0],[1, 1, 1],[0, 0, 0]],
  "?": [[1, 1, 0],[0, 0, 1],[0, 1, 0],[0, 0, 0],[0, 1, 0]],
  "(": [[0, 0, 1],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 0, 1]],
  ")": [[1, 0, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[1, 0, 0]],
  ":": [[0, 0, 0],[0, 1, 0],[0, 0, 0],[0, 1, 0],[0, 0, 0]],
  "<": [[0, 0, 1],[0, 1, 0],[1, 0, 0],[0, 1, 0],[0, 0, 1]],
  ">": [[1, 0, 0],[0, 1, 0],[0, 0, 1],[0, 1, 0],[1, 0, 0]]
}
