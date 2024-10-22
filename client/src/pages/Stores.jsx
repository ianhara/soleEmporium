function Stores() {
    return (
        <div className="locationsPage">

            <div >
                <h2>Store Locations</h2>
                <p className='intro'>
                    We have our store outlets in different locations. Come check us out!
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
                                href="https://www.google.com/maps/place/New+York,+NY/@40.69754,-74.3093296,10z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu"
                                className="card-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Maps
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
                                href="https://www.google.com/maps/place/Los+Angeles,+CA/@34.0206085,-118.7413866,10z/data=!3m1!4b1!4m6!3m5!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0549076!4d-118.242643!16s%2Fm%2F030qb3t?entry=ttu"
                                className="card-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Maps
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
                                href="https://www.google.com/maps/place/Miami,+FL/@25.7825389,-80.3118602,12z/data=!3m1!4b1!4m6!3m5!1s0x88d9b0a20ec8c111:0xff96f271ddad4f65!8m2!3d25.7616798!4d-80.1917902!16zL20vMGYydjA?entry=ttu"
                                className="card-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
  
  
        </div>
    )
  }
  
  export default Stores;