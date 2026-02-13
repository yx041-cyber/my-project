import { Box, Flex, Text } from '@mantine/core';

const ARROW = 10;
const DEFAULT_STEPS = [];

export default function ArrowStepper({ steps = DEFAULT_STEPS, activeIndex, primaryColor }) {
  return (
    <Flex mb="md">
      {steps.map((label, i) => {
        const isFirst = i === 0;
        const isLast = i === steps.length - 1;
        const isActive = i === activeIndex;

        const borderColor = isActive ? primaryColor : '#cbd5e1';
        const fillColor = isActive ? primaryColor : '#f1f5f9';
        const textColor = isActive ? '#ffffff' : '#94a3b8';

        const clipPath = isFirst
          ? `polygon(0 0, calc(100% - ${ARROW}px) 0, 100% 50%, calc(100% - ${ARROW}px) 100%, 0 100%)`
          : isLast
          ? `polygon(0 0, 100% 0, 100% 100%, 0 100%, ${ARROW}px 50%)`
          : `polygon(0 0, calc(100% - ${ARROW}px) 0, 100% 50%, calc(100% - ${ARROW}px) 100%, 0 100%, ${ARROW}px 50%)`;

        return (
          <Box key={label} flex={1} h={42} pos="relative"
            style={{ zIndex: steps.length - i, marginRight: isLast ? 0 : -2 }}>
            {/* Border layer */}
            <Box pos="absolute" style={{ inset: 0, backgroundColor: borderColor, clipPath }} />
            {/* Fill layer */}
            <Box pos="absolute" style={{ inset: '1.5px 2px', backgroundColor: fillColor, clipPath }} />
            {/* Text layer */}
            <Flex pos="relative" h="100%" align="center" justify="center"
              style={{ paddingLeft: isFirst ? 8 : ARROW + 2, paddingRight: isLast ? 8 : ARROW + 2 }}>
              <Text size="xs" fw={isActive ? 700 : 500} style={{ color: textColor }} ta="center" lineClamp={1}>
                {label}
              </Text>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
}
