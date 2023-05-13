const Features  = () => {
    return (
        <div style={{ backgroundImage: `url(/call-to-action-bg.jpg)`}} className="w-[100%] flex flex-col items-center justify-center gap-10 h-[120vh] bg-cover bg-center">
            
            <div className="text-4xl font-bold">OUR <span className="text-[#fd961a]">FEATURES</span></div>
            <div className="text-sm font-light opacity-70">WE UNDERSTAND HOW IMPORTANT HAVING RELIABLE SERVICE IS TO YOU</div>
            <div className="grid grid-cols-2 px-20 gap-20 place-content-center">
                <div className="flex flex-col">
                    <div className="font-bold text-center">Protected Website</div>
                    <div className="text-center">Our server fully protected from DDoS & Malware attack. We are using COMODO Secure Sockets Layer for establishing an encrypted link between a web server and a browser.</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-center">Reliable Investment Platform</div>
                    <div className="text-center">It is a team of professional traders in forex and cryptocurrency trading who know how to grab the profit end of the day</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-center">Quick Withdrawal</div>
                    <div className="text-center">ExpressFxMarket is a legal company registered in the United Kingdom providing its investment services to the members all around the world</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-center">UK Registered Company</div>
                    <div className="text-center">Our server fully protected from DDoS & Malware attack. We are using COMODO Secure Sockets Layer for establishing an encrypted link between a web server and a browser.</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-center">Strong ddos Protection</div>
                    <div className="text-center">We use one of the most experienced, professional and trusted DDoS protection and mitigation provider.</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-bold text-center">COMODO SSL with Green Bar</div>
                    <div className="text-center">We are verified by COMODO. Our company has gone through the Extended Validation process and use EV SSL Certificate from COMODO.</div>
                </div>
            </div>
            
        </div>
    )
}

export default Features