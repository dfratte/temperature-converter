import { render, fireEvent, screen } from "@testing-library/react";
import TemperatureConverterComponent, {
  enableKelvinToFahrenheit,
} from "./TemperatureConverterComponent";

describe("TemperatureConverterComponent", () => {
  test("renders TemperatureConverterComponent", () => {
    render(<TemperatureConverterComponent />);
    const linkElement = screen.getByText(/Temperature Converter/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("converts temperature correctly", async () => {
    render(<TemperatureConverterComponent />);
    const inputElement = screen.getByLabelText("Enter temperature:");
    const selectElement = screen.getByTestId("conversion-select");
    const buttonElement = screen.getByTestId("convert-button");

    fireEvent.change(inputElement, { target: { value: "32" } });
    fireEvent.change(selectElement, {
      target: { value: "fahrenheitToCelsius" },
    });
    fireEvent.click(buttonElement);

    const outputElement = await screen.findByTestId("output");
    expect(outputElement.textContent).toBe("The result is 0 ºC");
  });

  test("converts kelvin to Fahrenheit correctly", async () => {
    if (enableKelvinToFahrenheit) {
      render(<TemperatureConverterComponent />);
      const inputElement = screen.getByLabelText("Enter temperature:");
      const selectElement = screen.getByTestId("conversion-select");
      const buttonElement = screen.getByTestId("convert-button");

      fireEvent.change(inputElement, { target: { value: "273" } });
      fireEvent.change(selectElement, {
        target: { value: "kelvinToFahrenheit" },
      });
      fireEvent.click(buttonElement);

      const outputElement = await screen.findByTestId("output");
      expect(outputElement.textContent).toMatch(/31.73/i);
    }
  });
});
