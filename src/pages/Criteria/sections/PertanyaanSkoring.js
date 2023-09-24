import { FormControl, FormControlLabel, Radio } from "@mui/material";
import MKBox from "components/MKBox";


function PertanyaanSkoring({ value, setValue }) {
  return (
    <MKBox bg="white">
      <FormControl>
        <FormControlLabel
          control={
            <Radio
              checked={value && value!= null}
              onChange={() => setValue(true)}
              value={true}
              name="Ya"
              aria-label="ya"
            />
          }
          label="Ya"
        />
        <FormControlLabel
          control={
            <Radio
              checked={!value && value != null}
              onChange={() => setValue(false)}
              value={false}
              name="Tidak"
              aria-label="tidak"
            />
          }
          label="Tidak"
        />
      </FormControl>
    </MKBox>
  )
}

export default PertanyaanSkoring