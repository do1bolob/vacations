import { Clear, ContactMail, Send } from "@mui/icons-material";
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">

            <p>
                Welcome to our virtual passport to exotic destinations! Our website is a gateway to some of the most breathtaking and culturally rich corners of the world. Whether you're seeking a tranquil retreat in the heart of the jungle, an adrenaline-fueled adventure on a rugged mountainside, or a sun-soaked escape on a pristine tropical island, we have the perfect itinerary for you.

From the moment you arrive on our homepage, you'll be swept away by stunning images of far-off lands and the promise of adventure. Our expertly curated content is designed to inspire and inform, with detailed guides to must-see sights, hidden gems, and off-the-beaten-path experiences. We offer a wealth of information on everything from the best local cuisine to unique cultural traditions, ensuring that your trip is both enjoyable and enriching.

Our team of seasoned travel experts are passionate about exploring the world and are committed to providing you with the most up-to-date and reliable information on each destination. Whether you're a seasoned adventurer or a first-time traveler, our website is your go-to resource for planning the ultimate escape to exotic places.

So pack your bags, grab your passport, and let us take you on a journey you'll never forget!

        <h1>Have some sugestions?</h1>
            </p>
            

            <form>

<Typography variant="h3">
    Contact Us
    &nbsp;
    <ContactMail fontSize="large" />
</Typography>

<TextField label="Name" variant="outlined" className="TextBox" />

<TextField label="Email" type="email" variant="outlined" className="TextBox" />

<TextField label="Message" variant="outlined" className="TextBox" />

<FormControlLabel label="Send me promotional emails" control={<Checkbox />} className="LeftAlign" />

<ButtonGroup variant="contained" fullWidth>
    <Button color="primary">
        Send
        &nbsp;
        <Send />
    </Button>
    <Button color="secondary" type="reset">
        Clear
        &nbsp;
        <Clear />
    </Button>
</ButtonGroup>
</form>
			
        </div>
    );
}

export default About;
