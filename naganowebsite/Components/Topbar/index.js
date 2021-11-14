import { Box, Image, Flex, Button, Text } from "@chakra-ui/react"
import Link from "next/link"
function Topbar() {
    return (
        <Box bg="var(--dark-color)" w="100%" display="flex" justifyContent="center">
            <Box  w="100%" maxW="1440px" h="120px" p={4} color="white" display="flex">
                <Image src="/logo.svg" alt="Logo Nagano consultoria." />
                <Flex color="white" w="100%">
                    <Box display="flex" flex="1" alignItems="center" justifyContent="flex-end">
                        <Link href="/"><Text fontWeight="bold" color="var(--primary-color)" p="1.2rem" cursor="pointer">Home</Text></Link>
                        <Link href="/"><Text p="1.2rem" >About us</Text></Link>
                        <Link href="/"><Text p="1.2rem">Contact</Text></Link>
                        <Button _active={{ bg: "var(--primary-color-active)" }} _hover={{ bg: "var(--primary-color-hover)" }} size="sm" bg="var(--primary-color)" color="var(--secondary-color)">Simule</Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Topbar
