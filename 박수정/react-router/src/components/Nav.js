import React from 'react';
import {JsonToHTML} from '../action/fetch';

console.log(JsonToHTML)

const mainMenu = new JsonToHTML('.mainMenu', {
            fileName: 'menu',
            category: 'mainMenu',
            markup: function(obj) {
                return `<li>
                            <a href="${obj.url}">
                                <p>${obj.name}</p>
                            </a>
                        </li>`
            }
        });

const sideMenu = new JsonToHTML('.sideMenu', {
            fileName: 'menu',
            category: 'sideMenu',
            markup: function (obj) {
                return `<li>
                            <a href="${obj.url}">
                                <p>${obj.name}</p>
                            </a>
                        </li>`
            }
        });

const Nav = () => {
    return (
        <div>
            <div className="inner">
                <div className="mainMenu"></div>
                <div className="sideMenu"></div>
            </div>
        </div>
    );
};

export default Nav;