import { FormControl, FormControlLabel, Radio } from "@mui/material";


function FormSkoring({ label, value, setValue }) {
  return (
    <div>
      <p>
        {label}
      </p>
      <FormControl>
        <FormControlLabel
          control={
            <Radio
              checked={!value}
              onChange={() => setValue(false)}
              value={false}
              name="Ya"
              aria-label="ya"
            />
          }
          label="Ya"
        />
        <FormControlLabel
          control={
            <Radio
              checked={value}
              onChange={() => setValue(true)}
              value={false}
              name="Tidak"
              aria-label="tidak"
            />
          }
          label="Tidak"
        />
      </FormControl>
    </div>
  )
}

export default FormSkoring