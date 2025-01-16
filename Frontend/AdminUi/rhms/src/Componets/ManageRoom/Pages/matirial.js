<div className="container my-4">
{/* Header Section */}
<div className="row g-3 mb-4">
    <div className="col-12 col-md-4">
        <label className="form-label">Enter Property Name</label>
        <input
            type="text"
            className="form-control"
            placeholder="Property Name"
        />
    </div>
    <div className="col-12 col-md-4">
        <label className="form-label">Location</label>
        <input
            type="text"
            className="form-control"
            placeholder="Location"
        />
    </div>
    <div className="col-12 col-md-4">
        <label className="form-label">Contact No</label>
        <input
            type="text"
            className="form-control"
            placeholder="Contact No"
        />
    </div>
</div>

{/* Floor and Room Details */}
<div className="row g-3">
    {/* Floor Details */}
    <div className="col-12 col-md-4 h-100 p-4">
        <div className="card p-3">
            <h5 className="card-title mb-3">Floor Details</h5>
            <div className="row">
                <label className="form-label">Floor Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Floor Name"
                />
            </div>
            <div className="row">
                <label className="form-label">Floor Width</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Width in Feet"
                />
            </div>
            <div className="row">
                <label className="form-label">Floor Height</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Height in Feet"
                />
            </div>
            <div className="row">
                <Button className="btn btn-success w-100">Add Floor</Button>
            </div>
        </div>
    </div>
    <div className="col-12 col-md-4">
        {/* Floor Selection */}
        <div className="my-4">
            <h5 className="mb-3">Select Floor</h5>
            <div className="row g-2">
                {["Floor 1", "Floor 2", "Floor 3", "Floor 4"].map(
                    (floor, index) => (
                        <div className="col-12" key={index}>
                            <button className="btn btn-outline-success w-100">
                                {floor}
                            </button>
                        </div>
                    )
                )}
            </div>
        </div>
    </div>

    {/* Room Details */}
    <div className="col-12 col-md-4">
        <div className="card p-3">
            <h5 className="card-title mb-3">Room Details</h5>
            <div className="mb-2">
                <label className="form-label">Room Number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Room Number"
                />
            </div>
            <div className="row g-2 mb-2">
                <div className="col-6">
                    <label className="form-label">Width</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Width"
                    />
                </div>
                <div className="col-6">
                    <label className="form-label">Height</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Height"
                    />
                </div>
            </div>
            <div className="row g-2 mb-3">
                <div className="col-6">
                    <label className="form-label">X-Position</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="X-Position"
                    />
                </div>
                <div className="col-6">
                    <label className="form-label">Y-Position</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Y-Position"
                    />
                </div>
            </div>
            <button className="btn btn-success w-100">Add Room</button>
        </div>
    </div>
</div>

{/* Property Summary */}
<div className="card bg-success text-white p-3 mb-4">
    <h5>Property Summary</h5>
    <p>
        Property Name : Rimadi Guest INN | Property Location : Location
        | Contact Number : Number
    </p>
    <p>Floor 1 : Room 1 + width + height xpos + ypos ...</p>
</div>

{/* Add Photos */}
<div className="card p-3 mb-4">
    <h5 className="mb-3">Add Photos</h5>
    <div className="text-center">
        <button className="btn btn-warning">Add Images</button>
    </div>
</div>

{/* Add Property Button */}
<div className="text-end">
    <button className="btn btn-success">Add a Property</button>{" "}
    <div className="container my-4">
        {/* Header Section */}
        <div className="row g-3 mb-4">
            <div className="col-12 col-md-4">
                <label className="form-label">Enter Property Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Property Name"
                />
            </div>
            <div className="col-12 col-md-4">
                <label className="form-label">Location</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                />
            </div>
            <div className="col-12 col-md-4">
                <label className="form-label">Contact No</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Contact No"
                />
            </div>
        </div>

        {/* Floor and Room Details */}
        <div className="row g-3">
            {/* Floor Details */}
            <div className="col-12 col-md-6">
                <div className="card p-3">
                    <h5 className="card-title mb-3">Floor Details</h5>
                    <div className="mb-2">
                        <label className="form-label">Floor Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Floor Name"
                        />
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-6">
                            <label className="form-label">Floor Width</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Width in Feet"
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Floor Height</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Height in Feet"
                            />
                        </div>
                    </div>
                    <button className="btn btn-success w-100">
                        Add Floor
                    </button>
                </div>
            </div>

            {/* Room Details */}
            <div className="col-12 col-md-6">
                <div className="card p-3">
                    <h5 className="card-title mb-3">Room Details</h5>
                    <div className="mb-2">
                        <label className="form-label">Room Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Room Number"
                        />
                    </div>
                    <div className="row g-2 mb-2">
                        <div className="col-6">
                            <label className="form-label">Width</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Width"
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Height</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Height"
                            />
                        </div>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="col-6">
                            <label className="form-label">X-Position</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="X-Position"
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Y-Position</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Y-Position"
                            />
                        </div>
                    </div>
                    <button className="btn btn-success w-100">
                        Add Room
                    </button>
                </div>
            </div>
        </div>

        {/* Floor Selection */}
        <div className="my-4">
            <h5 className="mb-3">Select Floor</h5>
            <div className="row g-2">
                {["Floor 1", "Floor 2", "Floor 3", "Floor 4"].map(
                    (floor, index) => (
                        <div className="col-6 col-md-3" key={index}>
                            <button className="btn btn-outline-success w-100">
                                {floor}
                            </button>
                        </div>
                    )
                )}
            </div>
        </div>

        {/* Property Summary */}
        <div className="card bg-success text-white p-3 mb-4">
            <h5>Property Summary</h5>
            <p>
                Property Name : Rimadi Guest INN | Property Location :
                Location | Contact Number : Number
            </p>
            <p>Floor 1 : Room 1 + width + height xpos + ypos ...</p>
        </div>

        {/* Add Photos */}
        <div className="card p-3 mb-4">
            <h5 className="mb-3">Add Photos</h5>
            <div className="text-center">
                <button className="btn btn-warning">Add Images</button>
            </div>
        </div>

        {/* Add Property Button */}
        <div className="text-end">
            <button className="btn btn-success">Add a Property</button>
        </div>
    </div>
</div>
</div>