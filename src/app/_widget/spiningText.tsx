import { SpinningText } from "@/components/ui/spinning-text";

export function SpinningTextBasic() {
  return (
    <SpinningText
      radius={5}
      fontSize={1.2}
      className='font-medium leading-none'
    >
      {`pre-order • pre-order • pre-order • `}
    </SpinningText>
  );
}