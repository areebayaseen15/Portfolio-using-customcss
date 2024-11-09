"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import Navbar2 from '../Components/nav2';
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../Components/Card';

const TypescriptProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="project-section">
  <div className="container">
    <h1 className="section-title" data-aos="fade-up">
      My Typescript Projects
    </h1>

    <div className="card-grid">
      {/* Card 1 */}
      <Card image='/Assest/Pictures/calculator.jpeg' title='Cli CALCULATOR' description=' The TypeScript CLI Calculator is a command-line application developed using TypeScript, designed 
                to perform basic arithmetic operations like addition, subtraction, multiplication, and division.'
               Url='https://github.com/areebayaseen15/Typescript-NodeProject00-Cli-Calculator.git' link="github Link" link2='npx ar15-simple-calculator'
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>
        
         {/* Card 2 */}
      <Card image='/Assest/Pictures/todos.jpeg' title='Cli TODOS APP' description='  The TypeScript CLI To-Do List Application is a command-line tool built to help users efficiently manage their daily tasks. This project showcases my ability to develop robust, interactive, and user-friendly CLI applications using TypeScript.'
              link2="npx npx-todo-app"  Url='https://github.com/areebayaseen15/typescript-NodeProject03-Todos.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

               
         {/* Card 3 */}
      <Card image='/Assest/Pictures/atm.jpg' title='Cli ATM' 
      description='The TypeScript CLI ATM Application is a fully functional command-line program designed to simulate the core 
                features of an ATM machine. This project demonstrates my ability to develop secure, user-friendly financial
                 applications using TypeScript, showcasing my skills in working with logic, data structures, and CLI
                  interactivity.'
              link2="npx ar15-atm"  Url='"https://github.com/areebayaseen15/Typescript-NodeProject02-ATM.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

                {/* Card 4*/}
      <Card image='/Assest/Pictures/guessing number.jpeg' title='CLI GUESSING NUMBER GAME' 
      description=' The TypeScript CLI Number Guessing Game is an interactive command-line game where players try 
      to guess a randomly generated number within a specified range. This project highlights my ability to build engaging and interactive CLI applications using TypeScript, focusing on user experience, logic, and input handling.
.'
              link2="npx  ar15-cli-guessing-number"  Url='https://github.com/areebayaseen15/Typescript-NodeProject01-Cli-Guessing-Game.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>



                {/* Card 5*/}
                <Card image='/Assest/Pictures/currencyconvertor.png' title='Cli CURRENCYY CONVERTOR' 
      description=' The TypeScript CLI Currency Converter is a command-line tool that allows users to convert between different
                 currencies in real-time. This project demonstrates my ability to integrate external APIs and work with 
                 real-time data in a CLI environment using TypeScript.'
              link2="Npx ar15-cli-currency-convertor"  Url='https://github.com/areebayaseen15/Typescript-NodeProject04_Currency-convertor.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

                    {/* Card 6*/}
                    <Card image='/Assest/Pictures/wordscounter.jpeg' title='Cli WORDS COUNTER' 
      description='The TypeScript CLI Word Counter is a command-line tool that counts the number of words, characters, and sentences in a given text input. This project showcases my ability to process and analyze text in a CLI environment using TypeScript.'
              link2="npx ar15-words-counter"  Url='https://github.com/areebayaseen15/Project-05-Words-Counter.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

                    {/* Card 7*/}
                    <Card image='/Assest/Pictures/countdown.gif' title='Cli COUNTDOWN TIMER' 
      description='The TypeScript CLI Countdown Timer is a command-line application that provides a simple yet effective countdown timer for various tasks such as study sessions, workouts, or cooking. This project highlights my ability to manage time-based operations and user interaction within a CLI environment using TypeScript.'
              link2="npx ar15-countdown"  Url='https://github.com/areebayaseen15/Typescript-Project09-CountDown.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

                {/* Card 8*/}
                <Card image='/Assest/Pictures/adventure game.jpeg' title='Cli ADVENTURE GAME' 
      description='This project showcases a text-based adventure game developed using TypeScript, highlighting 
      modern coding practices and robust design principles. Players will embark on an immersive journey where
       their choices shape the outcome of their adventure.'
              link2="npx ar15-adventur-game"  Url='https://github.com/areebayaseen15/Typescript-NodeProject-07-Adventure-Game.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

                {/* Card 9*/}
                <Card image='/Assest/Pictures/Webp.net-compress-image.jpg' title='Cli QUIZZ APP' 
      description='Dive into the world of interactive learning with this command-line quiz application built using TypeScript!

                This project demonstrates a CLI-based quiz app where users can test their knowledge on various topics through a series of questions. Utilizing TypeScript ensures robust type safety and enhances the maintainability of the application.
              '
              link2="npx quiz-system-by-ar15"  Url='https://github.com/areebayaseen15/Typescript-Project08-quizz-System.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

                             {/* Card 10*/}
                             <Card image='/Assest/Pictures/studentmanagement.jpeg' title='Cli STUDENT MANAGMENT SYSTEM' 
      description=' The TypeScript CLI Student Management System is a command-line tool designed to manage student records efficiently. This project showcases my ability to develop robust and user-friendly management systems using TypeScript, featuring a variety of operations for adding, updating, and viewing student data in a simple, intuitive interface.'

              link2="npx ar15-student-management-system"
               Url='https://github.com/areebayaseen15/Typescript_Work/tree/main/Typescript%20Node-Projects/Project%2006%20Student-management-system' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

               {/* Card 11*/}
               <Card image='/Assest/Pictures/oop.jpeg' title='Cli OOP APP' 
      description=' This project showcases the use of OOP principles to design a scalable and maintainable CLI app. Leveraging TypeScript, the application demonstrates how OOP concepts such as classes, inheritance, and encapsulation can be effectively implemented in a CLI environment.'

              link2="npx object-programingar-15"  Url='https://github.com/areebayaseen15/Typescript-Project10-OOP.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

               {/* Card 12*/}
               <Card image='/Assest/Pictures/bank.jpeg' title='Cli BANK SYSTEM' 
      description='   This project presents a robust banking system implemented via a command-line interface, leveraging OOP to ensure a clean, scalable, and maintainable codebase. It allows users to manage bank accounts, perform transactions, and view account details through a text-based interface.'


              link2="mybank-ar15"  Url='https://github.com/areebayaseen15/Typescript-Project-11-BankSystem.gitt' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

                {/* Card 13*/}
                <Card image='/Assest/Pictures/eid Mubarak.webp' title='EID MUBARK WISH' 
      description=' I created this typescript Cli greet Eid Mubarak for greeting my belovedand respectable teachers of GIAIC
                .This project was done on the day of Eid which shows my love for coding.'

             Url='https://github.com/areebayaseen15/birthday-Wisher.git'
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

      {/* Card 14*/}
      <Card image='/Assest/Pictures/birthday wish.gif' title='Cli BIRTHDAY WISh<' 
      description='    I generated this command line birthday wisher on my birthday while learning typescript to wish myself
                HAPPY BIRTHDAY in a programmer style.I made it cli and published to npm for others to also use it to wish
                their beloved ones.'

               Url='https://github.com/areebayaseen15/birthday-Wisher.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>
                {/* Card 15*/}
                <Card image='/Assest/Pictures/45-assignment.gif' title='Typescript 45 assignments questions' 
      description='  These are the first Assignments Question I started solving in my programming journey.these are basically
                problem solving and logic building quuestiions of typescript.These Questions are very
                closed to my heart as it helped me to stand out in the class..'
              Url='https://github.com/areebayaseen15/typescript-45-assignment-questions.git' link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>

                   {/* Card 16*/}
                   <Card image='/Assest/Pictures/100days.jpg' title='100 DAYS OF CODING' 
      description='   This 100 days of coding challenge were assigned to us by or stuedent Ambassador Sir Asharib Ali
                for hands on practice of coding.I also tried to be the participator of this challenge And have done almost half
                of days so far.This challenge helped me think critically and enhane my skills of problem solving.'
              Url="https://github.com/areebayaseen15/Typescript-100days_Of_Coding_ChallengebyAsharibAli.git" link="github Link"
               backgroundColor='linear-gradient(to right, #F9A8D4, #FFFFFF, #F9A8D4)'/>
    </div>

  </div>
</div>

    </>
  );
};

export default TypescriptProjects;
