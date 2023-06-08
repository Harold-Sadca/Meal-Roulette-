//TODO:everything

function Footer () {

  return (
    <>
                <div class="mb-3">
                <label class="form-label" for="location">Location</label>
                <input class="form-control" type="text" id="location" name="campground[location]" required/>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
    </>
  )
}

export default Footer