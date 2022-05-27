import {
    IconButton,
    StyledEngineProvider,
    TextField,
    Select,
    MenuItem,
    RadioGroup,
    FormControl,
    Radio,
    FormControlLabel,
    FormGroup,
    Checkbox,
    Button
} from '@mui/material';
import {styled} from '@mui/material/styles'
import EditIcon from '@mui/icons-material/Edit';
import './App.scss';

const Input = styled('input')({
    display: 'none',
});

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
    }
});

function App() {

  return (
      <div className="app">
          <StyledEngineProvider injectFirst>
              <div className="header">
                <IconButton size="large">
                  <EditIcon/>
                </IconButton>
              </div>
          </StyledEngineProvider>

          <div className="main">
              <form action = "/" method="POST" className="form">
                  <div className="form__section">
                      <div className="form__title">
                          <p className="required">Maintance request</p>
                      </div>
                  </div>
                  <div className="form__section">
                      <div className="name-section">
                          <h4 className="required">Fill your name</h4>
                          <ValidationTextField
                              id="input-name"
                              label="Your answer"
                              name = "FIO"
                              variant="standard"
                              fullWidth
                              required
                              type="text"
                          >
                        </ValidationTextField>
                      </div>
                  </div>
                  <div className="form__section">
                      <div className="phone-num-section">
                          <h4 className="required">Fill your phone number</h4>
                          <ValidationTextField
                              id="phone-num"
                              name = "phone-num"
                              label="Your answer"
                              variant="standard"
                              fullWidth
                              required
                              type="text"
                              inputProps={{pattern: "^(\\+375)(29|25|44|33)(\\d{3})(\\d{2})(\\d{2})$"}}
                          >
                          </ValidationTextField>
                      </div>
                  </div>
                      <div className="form__section">
                          <div className="city-section">
                            <h4 className="required">Choose your city</h4>
                              <Select id="select-city" required={true}>
                                  <MenuItem value="Brest">Brest</MenuItem>
                                  <MenuItem value="Mogilev">Mogilev</MenuItem>
                                  <MenuItem value="Minsk">Minsk</MenuItem>
                                  <MenuItem value="Vitebsk">Vitebsk</MenuItem>
                                  <MenuItem value="Gomel">Gomel</MenuItem>
                                  <MenuItem value="Grodno">Grodno</MenuItem>
                              </Select>
                          </div>
                      </div>
                      <div className="form__section">
                          <div className="car-type-section">
                              <h4 className="required">Car type</h4>
                              <FormControl>
                                  <RadioGroup
                                      name="radio-car-type"
                                  >
                                      <FormControlLabel value="Passenger Car(Petrol)" control={<Radio />} label="Passenger Car(Petrol)" />
                                      <FormControlLabel value="Passenger Car(Diesel)" control={<Radio />} label="Passenger Car(Diesel)" />
                                      <FormControlLabel value="Truck(up to 3.5 ton)" control={<Radio />} label="Truck(up to 3.5 ton)" />
                                      <FormControlLabel value="Bus(up to 5 ton)" control={<Radio />} label="Bus(up to 5 ton)" />
                                      <FormControlLabel value="Motorcycle or scooter" control={<Radio />} label="Motorcycle or scooter" />
                                      <FormControlLabel value="Four-wheel" control={<Radio />} label="Four-wheel" />
                                      <FormControlLabel value="Moped" control={<Radio />} label="Moped" />
                                      <FormControlLabel value="Quad bike" control={<Radio />} label="Quad bike" />
                                  </RadioGroup>
                              </FormControl>
                          </div>
                      </div>
                      <div className="form__section">
                          <div className="car-category-section">
                              <h4 className="required">Your category</h4>
                              <FormGroup>
                                  <FormControlLabel name = "AM" control={<Checkbox defaultChecked />} label="AM" />
                                  <FormControlLabel name = "A" control={<Checkbox />} label="A" />
                                  <FormControlLabel name = "A1" control={<Checkbox />} label="A1" />
                                  <FormControlLabel name = "B" control={<Checkbox />} label="B" />
                                  <FormControlLabel name = "C" control={<Checkbox />} label="C" />
                                  <FormControlLabel name = "D" control={<Checkbox />} label="D" />
                                  <FormControlLabel name = "BE" control={<Checkbox />} label="BE" />
                                  <FormControlLabel name = "CE" control={<Checkbox />} label="CE" />
                                  <FormControlLabel name = "DE" control={<Checkbox />} label="DE" />
                                  <FormControlLabel name = "F" control={<Checkbox />} label="F" />
                                  <FormControlLabel name = "I" control={<Checkbox />} label="I" />
                              </FormGroup>
                          </div>
                      </div>
                  <div className="form__section">
                      <div className="file-upload-section">
                          <h4 className="required">Your passport photo</h4>
                          <label htmlFor="file-upload">
                              <Input accept="image/*" id="file-upload" multiple type="file" />
                              <Button name = "file-upload" sx={{border: 'none'}} variant="outlined" component="span">
                                  ADD FILE
                              </Button>
                          </label>
                      </div>
                  </div>
                  <div className="form__section">
                          <label htmlFor="submit">
                              <Input id = "submit"  multiple type="submit" />
                              <Button variant="contained" component="span">
                                  Submit
                              </Button>
                          </label>
                  </div>
                  <div>
                      <TextField>

                      </TextField>
                  </div>
          </form>
        </div>
      </div>


  );
}

export default App;
