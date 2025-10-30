import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

type Props = TouchableOpacityProps & {
    title?: string;
    onPress?: () => void;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}

export function Button({ title, onPress, icon, style }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.button, style]}>
        {icon}
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;