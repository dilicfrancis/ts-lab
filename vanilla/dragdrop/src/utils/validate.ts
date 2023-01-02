namespace Application {
  export interface Checker {
    value: string | number;
    required?: boolean;
    minimumLength?: number;
    maximumLength?: number;
    floor?: number;
    ceiling?: number;
  }

  export function validate(field: Checker) {
    let valid = true;
    if (field.required)
      valid = valid && field.value.toString().trim().length !== 0;

    if (field.minimumLength != null && typeof field.value === "string")
      valid = valid && field.value.length >= field.minimumLength;
    if (field.maximumLength != null && typeof field.value === "string")
      valid = valid && field.value.length <= field.maximumLength;
    if (field.floor != null && typeof field.value === "number")
      valid = valid && field.value >= field.floor;
    if (field.ceiling != null && typeof field.value === "number")
      valid = valid && field.value <= field.ceiling;
    return valid;
  }
}
