import React from 'react';

export const Contact = () => {
    return (
        <div>
            <section id="contact">
                <h1>Kontakt</h1>
                <form className="contact-form">
                    <input type="text" placeholder="Ime i prezime"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Poruka"></textarea>
                    <input type="submit" value="Pošalji"/>
                </form>
                <div className="social_media">
                    <a href="." target="_blank" rel="noreferrer">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="." target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                </div>
            </section>
        </div>
    )
}