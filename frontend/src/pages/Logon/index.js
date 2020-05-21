import React from 'react';

import './styles.css';

export default function Logon() {

    return (


        <div className="container">
            

                <section className=" content first-content">

                <section className="first-column">

                    <h1 className="title titleWelcome">Welcome Back !</h1>
                    <p className="description descriptionWelcome">To keep connected with us</p>
                    <p className="description descriptionWelcome"> please login with your person info</p>

                    <button className="btn buttonWelcome" type="submit">Sing in</button>

            </section>
                    
                <section className="second-column">

                        <h1 className=" title titleCreate">Create Account</h1>

                        <ul className="socialMidia midiaCreate">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Google +</a></li>
                            <li><a href="#">Linkedin</a> </li>


                         </ul>

                        <p className="description descriptionCreate">or use your email for registration</p>
                    
                        <form className="formTest">

                            <input placeholder="Insert name" />
                            <input type="email" placeholder="Insert Email" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm the password" />
                            <button className="btn buttonCreate" type="submit">Sing In</button>
                    </form>
                    
                    
                    </section>

             </section>

                <section className=" content second-content">

                    <section className="first-column">

                        <h1 className="title titleHello">Hello, Friend ! </h1>
                        <p className="description descriptionHello">Enter your personal details</p>
                        <p className="description descriptionHello">and start journey with us</p>

                        <button className="btn buttonHello" type="submit">Sing up</button>

                    </section>

                    <section className="second-column">
                        <h1 className=" title titleDeveloper">Sign In To Developer</h1>

                        <ul className="midiaSocial midiaDeveloper">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Google +</a></li>
                            <li><a href="#">Linkedin</a> </li>

                        </ul>
                        
                        <p className="description descriptionDeveloper">or use you email account</p>

                        <form>
                            <input type="email" placeholder="Insert Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password ?</a>
                            <button  className="btn buttonDeveloper" type="submit">Sing In</button>


                        </form>

                    </section>
                </section>
            

            

        </div>
    )
}