import React from 'react';
import ImageDemo from "./image";
import moment from "moment";
import {icons} from '../../../../assets/face-icons/icons'
import "./cart.css"

const mood = ["", "Tabassum", "Jahldor", "Xafa", "Jirkangan", "Qo'rqqan", "Hayratda", "E'tiborsiz", "Kulgan", "", "Xursand", "Ikkilangan", "Baqirgan"]

const Cart = ({ item, isDarkMode }) => {
    console.log(item.the_date)
    return (
        <div className={`j_card ${isDarkMode && 'darkModeCard darkModeBorder'}`}>
            <div className="j_cardInfo">
                <div className="j_cardInfoTop">
                    <div className="j_cardInfoTopLeft">
                        <ImageDemo id = {item.id} />
                        <div className="visit_time_info">
                            <p className="ddmmyy">{moment(item.the_date).format("DD.MM.YYYY")}</p>
                            <p className="hhmmss">{moment(item.the_date).format("HH:mm:ss")}</p>
                        </div>
                    </div>
                    <div className="j_cardInfoTopRight">
                        <div>
                            {
                                item.gender === 2
                                ? icons.female[item.old].default[0]
                                : icons.male[item.old].default[0]
                            }
                            <p>{item.gender === 1 ? 'Erkak' : item.gender === 2 ? 'Ayol' : ''}</p>
                        </div>
                        <div>
                            {
                                item.gender === 2
                                ? icons.female[item.old].default[0]
                                : icons.male[item.old].default[0]
                            }
                            <p>
                                {
                                   item && item.old === 'age_0_10'
                                        ? "Yosh bola"
                                        : item.old === 'age_11_17' ? "O'smir"
                                            : item.old === 'age_18_25' ? "O'spirin"
                                                : item.old === 'age_26_40' ? "O'rta yoshli"
                                                    : item.old === 'age_41_60' ? "Katta yoshli"
                                                        : "Keksa"
                                }
                            </p>
                        </div>
                        <div>
                            {
                                item.gender === 2
                                ? (item.args.MASKA === 1 ? icons.female[item.old].mask[1] : icons.female[item.old].default[0])
                                : (item.args.MASKA === 1 ? icons.male[item.old].mask[1] : icons.male[item.old].default[0])
                            }
                            <p>{item.args.MASKA === 1 ? 'Niqobli' : item.args.MASKA === 0 ? 'Niqobsiz' : ''}</p>
                        </div>
                        <div>
                            {
                                item.gender === 2
                                ? (icons.female[item.old].mood.hasOwnProperty(item.args.KAYFIYAT) ? icons.female[item.old].mood[item.args.KAYFIYAT] : icons.female[item.old].default[0])
                                : (icons.male[item.old].mood.hasOwnProperty(item.args.KAYFIYAT) ? icons.male[item.old].mood[item.args.KAYFIYAT] : icons.male[item.old].default[0])
                            }
                            <p>{mood[item.args.KAYFIYAT]}</p>
                        </div>
                        <div>
                            {
                                item.gender === 2
                                ? (icons.female[item.old].glass.hasOwnProperty(item.args.KOZOYNAK) ? icons.female[item.old].glass[item.args.KOZOYNAK] : icons.female[item.old].default[0])
                                : (icons.male[item.old].glass.hasOwnProperty(item.args.KOZOYNAK) ? icons.male[item.old].glass[item.args.KOZOYNAK] : icons.male[item.old].default[0])
                            }
                            <p className="card_longTitle" >{item.args.KOZOYNAK === 1 ? "Ko'rishni tuzatish" : item.args.KOZOYNAK === 14 ? "Quyoshdan himoya" : "Ko'zoynaksiz"}</p>
                        </div>
                        
                        <div>
                            {
                                item.gender === 2
                                ? ""
                                : (icons.male[item.old].beard.hasOwnProperty(item.args.SOQOL) ? icons.male[item.old].beard[item.args.SOQOL] : icons.male[item.old].default[0])
                            }
                            <p>
                                {
                                    item.gender === 2
                                    ? ''
                                    : (item.args.SOQOL === 1 ? 'Soqolli' : item.args.SOQOL === 0 ? 'Soqolsiz' : '')
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;