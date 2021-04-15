import React from 'react'
import Card from '@material-ui/core/Card';
import {Editable} from '../Table';
import Charts from './Charts'
import FixedTags from './Dropdown'
import {withRouter} from 'react-router-dom'

const Books = () => {
    return (
        <>
            <div className="card-part">
                <Card className="card">
                    <div className="card-wrapper">
                        <div>
                            <h3>Buyurtmalar</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <h1>13</h1>
                        </div>
                    </div>
                </Card>
                <Card className="card">
                    <div className="card-wrapper">
                        <div>
                            <h3>Foydalanuvchilar</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <h1>13</h1>
                        </div>
                    </div>
                </Card>
                <Card className="card">
                    <div className="card-wrapper">
                        <div>
                            <h3>Xabarlar</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <h1>13</h1>
                        </div>
                    </div>
                </Card>
                <Card className="card">
                    <div className="card-wrapper">
                        <div>
                            <h3>Mahsulotlar</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div>
                            <h1>13</h1>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="chart-part">
                <div className="chart-part-wrapper">
                    <Card className="card-chart">
                        <Charts/>
                    </Card>
                </div>
            </div>
            <div style={{display:"flex", alignItems: "center", justifyContent: "space-around"}}>
                <Card className="card" style={{width:"48%", padding:"20px", textAlign: "center"}}>
                    <h2>Buyurtmalarni kategoriya bo'yicha tartiblash</h2>
                </Card>
                <FixedTags/>
            </div>
            <div>
                <Editable/>
            </div>
        </>
    )
}

export default withRouter(Books)
