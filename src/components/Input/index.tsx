import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";

type Props = TextInputProps & {
    placeholder?: string;
    onChangeText?: (text: string) => void;
    style?: React.CSSProperties;
}

export function Input({ placeholder, onChangeText, style, ...rest }: Props) {
  return (
      <TextInput style={[styles.input, style]} 
        placeholder={placeholder} 
        onChangeText={onChangeText} 
        {...rest}
      />
  );
}

export default Input;

