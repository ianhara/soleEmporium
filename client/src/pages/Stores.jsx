function Stores() {
    return (
        <div className="locationsPage">

            <div >
                <h2>Store Locations</h2>
                <p className='intro'>
                    We have our store outlets in different locations.
                </p>
            </div>
  
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Sole Emporium NewYork</h5>
                            <p className="card-text">
                                3333 Random Street,<br />
                                New York, NY 10000 <br />
                                Store Hours: 9AM to 5PM
                            </p>
                        </div>
                        <div className="card-footer mx-auto bg-transparent">
                            <a
                                href="location"
                                className="card-link"
                            >
                                Click Here for Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
  
            
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Sole Emporium Los Angeles</h5>
                            <p className="card-text">
                                333 Hawk Street,<br />
                                Los Angeles, CA 90030 <br />
                                Store Hours: 9AM to 5PM
                            </p>
                        </div>
                        <div className="card-footer mx-auto bg-transparent">
                            <a
                                href="location"
                                className="card-link"
                            >
                                Click Here for Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
  
            
  
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
  
                            <h5 className="card-title">Sole Emporium Miami</h5>
                            <p className="card-text">
                                333 Game Street,<br />
                                Miami, FL 32513 <br />
                                Store Hours: 9AM to 5PM
  
                            </p>
                        </div>
                        <div className="card-footer mx-auto bg-transparent">
                            <a
                                href="location"
                                className="card-link"
                            >
                                Click Here for Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
  
  
        </div>
    )
  }
  
  export default Stores;