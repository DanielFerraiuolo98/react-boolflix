import Card from "../Card";
import CardSeries from "../CardSeries";

function Main() {
    return (
        <>
            <main>
                <div className="movies">
                    <div className="container-film">
                        <h5 className="film">Movies</h5>
                    </div>
                    <Card />
                </div>
                <div className="series">
                    <div className="container-serie">
                        <h5 className="serie">Series</h5>
                    </div>
                    <CardSeries />
                </div>
            </main>
        </>
    )
}

export default Main;