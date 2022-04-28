<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/KhairulAminShabudin/Celsius">
    <img src="React-Web-App/src/asset/Logo.png" alt="Logo" >
  </a>

  
  <p align="center">
    <a href="https://github.com/KhairulAminShabudin/Celsius"><strong>Explore the docs »</strong></a>
    <br />
    <br />
      </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/KhairulAminShabudin/Celsius)


A web application that is able to visualize temperature data, complete with authentication and authorisation services. It has a dashboard to help you manage files and visualize your data with ease.

### Features
-   Visualize the given data over time in a given day
-   Upload new temperature data
-   Sort the temperature data
-   Filter the temperature data

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Chakra-UI](https://chakra-ui.com/)
* [Quarkus](https://quarkus.io/)
* [Keycloak](https://www.keycloak.org/)
* [PostgreSQL](https://www.postgresql.org/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started



### Prerequisites


#### ReactJS & Chakra-UI

- NodeJS
- Any code editor e.g. VSC, Atom

#### Quarkus

- Java Developer Version
- Apache Maven
- IntelliJ IDEA or Eclipse
- Git

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/KhairulAminShabudin/Celsius.git
   ```
2. Download and Install the latest version of [PostgreSQL](https://www.postgresql.org/download/)
3. Setup your Keycloak Server by following the [Getting Started](https://www.keycloak.org/guides) guide based on your preferences. You may also refer to this [video](https://www.youtube.com/watch?v=duawSV69LDI&t=293s) for further clarification on how to properly setup a Keycloak server.
4. Start the backend server
   1. Open `Quarkus-App` project in IntelliJ IDEA
   2. Open `application.properties` and uncomment `quarkus.hibernate-orm.database.generation=drop-and-create`  to auto-create a table in PostgreSQL.
   3. Open terminal in IntelliJ and start quarkus server by running the following command:
     ```sh
     ./mvnw compile quarkus:dev
     ```
     **_NOTE:_**  Quarkus now ships with a Dev UI,  which is available in dev mode only at  [http://localhost:8080/q/dev/](http://localhost:8080/q/dev/)

5. Launch web application
   1. Open `React-Web-App` folder in your code editor of choice and install all packages by running the following command in the terminal:
   ```node
   npm install
   ```

   2. Open `keycloak.js` file from the `src` folder and update the content with your Keycloak realm instance. It should look like this:
   ```Js
	import  Keycloak  from  "keycloak-js";
     
	const  keycloak = new  Keycloak({
			url:  "http://localhost:8080",
			realm:  "YOUR REALM NAME",
			clientId:  "YOUR CLIENT NAME",
		});
		
	export  default  keycloak;
     ```
   3. Launch web server
   ```node
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Khairul Amin Shabudin - mohamad.khairul@skymind.my

Project Link: [Celsius](https://github.com/KhairulAminShabudin/Celsius)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/KhairulAminShabudin/Celsius.svg?style=for-the-badge
[contributors-url]: https://github.com/KhairulAminShabudin/Celsius/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/KhairulAminShabudin/Celsius.svg?style=for-the-badge
[forks-url]: https://github.com/KhairulAminShabudin/Celsius/network/members
[stars-shield]: https://img.shields.io/github/stars/KhairulAminShabudin/Celsius.svg?style=for-the-badge
[stars-url]: https://github.com/KhairulAminShabudin/Celsius/stargazers
[issues-shield]: https://img.shields.io/github/issues/KhairulAminShabudin/Celsius.svg?style=for-the-badge
[issues-url]: https://github.com/KhairulAminShabudin/Celsius/issues
[license-shield]: https://img.shields.io/github/license/KhairulAminShabudin/Celsius.svg?style=for-the-badge
[license-url]: https://github.com/KhairulAminShabudin/Celsius/blob/master/LICENSE
[product-screenshot]: React-Web-App/public/screenshot.png
