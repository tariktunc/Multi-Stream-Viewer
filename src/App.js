import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [numChannels, setNumChannels] = useState(16);
    const [channelIds, setChannelIds] = useState([
        '-Lrxv1_i3qc', //TRT
        '7l_VVWZTFZk', //Cuneyt Ozdemir Canli SECIM OZEL
        'SqHIO2zhxbA', //HT
        'hHSmBJk6w0c', //bloombergHT
        'adf2f8UCuss', //hbrglobal
        'XEJM4Hcgd3M', //NTV
        'sd94keSra6A', //TV100
        'gNV8SIq_Xjw', //TGRT
        'sd94keSra6A', //tv100
        'GKwLomZwX_k', //BNGUTV
        '3q0UXsXLmHY', //ULUSAL
        'khg-UfGaE-I', //Kanal 24 tv
        'UVW4-DQUVUU', //TVNET
        'JS2opO7NTQE', //ULKE ! HATALI
        'b2qTF5aIrcI', //Halk Tv
        'acwBho1oqcg' //CNN
    ]);

    const handleSettingsChange = (num) => {
        setNumChannels(num);
    };

    const generateIframes = () => {
        let iframes = [];
        for (let i = 0; i < numChannels; i++) {
            iframes.push(
                <div
                    key={i}
                    className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center p-0"
                    style={{ marginBottom: '0px' }}>
                    <iframe
                        className="d-grid"
                        src={`https://www.youtube.com/embed/${channelIds[i]}?autoplay=1&mute=1`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            );
        }
        return iframes;
    };

    return (
        <div className="text-bg-dark bg-dark">
            <div className="msk-container">
                <div className="row justify-content-around align-items-center m-0">
                    {generateIframes()}
                </div>
            </div>
        </div>
    );
}

export default App;
