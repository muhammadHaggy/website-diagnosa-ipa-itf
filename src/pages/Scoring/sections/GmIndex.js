import { FormControl, FormControlLabel, Radio } from "@mui/material";


function GmIndex({gmIndex, setGmIndex}) {

  return (
    <>
      <p>
        GM index of ETT aspirate
      </p>
      <FormControl>
        <FormControlLabel
          control={
            <Radio
              checked={!gmIndex}
              onChange={() => setGmIndex(false)}
              value={false}
              name="Under 1.88"
              aria-label="under-1.88"
            />
          }
          label="< 1.88 (Score of 0)"
        />
        <FormControlLabel
          control={
            <Radio
              checked={gmIndex}
              onChange={() => setGmIndex(true)}
              value={false}
              name="greater or equal 1.88"
              aria-label="grater-or-equal-1.88"
            />
          }
          label="≥ 1.88 (Score of 2)"
        />
      </FormControl>
    </>
  )
}

export default GmIndex