import googlePlay from "../../assets/google-play.svg";
import appStore from "../../assets/app-store.svg";

export default function LearnDownloadFooterStrip() {
    return (
        <section className="mt-0 bg-[#e9edf2]">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[170px_1fr] md:items-start">
                <div>
                    <h3 className="text-[15px] font-semibold leading-none text-[#2c3f57]">Download the App</h3>
                    <div className="mt-4 space-y-4">
                        <img src={googlePlay} alt="Get it on Google Play" className="h-8 w-auto" />
                        <img src={appStore} alt="Download on the App Store" className="h-8 w-auto" />
                    </div>
                </div>

                <p className="text-xs leading-relaxed text-[#415268] md:pt-1">
                    Information provided on this Site is for general educational purposes only and is not intended to
                    constitute investment or other advice on financial products. Such information is not, and should
                    not be read as, an offer or recommendation to buy or sell or a solicitation of an offer or
                    recommendation to buy or sell any particular digital asset or to use any particular investment
                    strategy. Coinbase and its affiliates (collectively "Coinbase") make no representation as to the
                    accuracy, completeness, timeliness, suitability, or validity of any information on this Site and
                    will not be liable for any errors, omissions, or delays in this information or any losses,
                    injuries, or damages arising from its display or use. Unless otherwise noted, all images are the
                    property of Coinbase. Coinbase is not registered or licensed with the U.S. Securities and Exchange
                    Commission or the U.S. Commodity Futures Trading Commission. Links provided to third-party sites are
                    for informational purposes. Such sites are not under the control of Coinbase, and Coinbase is not
                    responsible for the accuracy of the content on such third-party sites.
                </p>
            </div>
        </section>
    );
}
