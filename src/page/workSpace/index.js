import { Checkbox, Table, Tbody, Td, Text, Th, Thead, Tr, Icon, TableContainer, Card } from '@chakra-ui/react';
import {
    Flex, Box, Input, InputGroup, InputLeftElement, InputRightElement, IconButton,
    useStyleConfig
} from '@chakra-ui/react';
import { LockIcon, UnlockIcon, DeleteIcon, SearchIcon, CloseIcon, PlusSquareIcon, ArrowDownIcon, CalendarIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { Divider } from '@chakra-ui/react';

const WorkSpace = () => {

    const textStyles = useStyleConfig('Text', { color: 'green.900' });

    const data = [
        { id: 1, username: 'John Doe', date: '2023-07-14', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking', status: 'Private' },
        { id: 2, username: 'Jane Smith', date: '2023-07-15', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking', status: 'Public' },
        { id: 3, username: 'Jane Smith', date: '2023-07-15', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking ', status: 'Private' },
        { id: 4, username: 'Jane Smith', date: '2023-07-15', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking', status: 'Public' },
        // Add more data rows as needed
    ];
    const [searchValue, setSearchValue] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const clearSearch = () => {
        setSearchValue('');
    };

    const checkboxHandler = (id) => {
        console.log(`Checkbox clicked for id: ${id}`);
    };

    const getStatusIcon = (status) => {
        if (status === 'Public') {
            return <Icon as={LockIcon} color="green.500" />;
        } else {
            return <Icon as={UnlockIcon} color="red.500" />;
        }
    };
    const handleSearch = () => {
        const result = data.find((entry) => entry.date === searchDate);
        setSearchResult(result ? result.description : 'No matching entry found.');
    };
    const [populardata, setPopularData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://baconipsum.com/api/?type=meat-and-filler&paras=3'
                );
                const populardata = await response.json();
                setPopularData(populardata);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <Box
                width="100%"
                padding={{ base: '1rem', md: '2rem', lg: '3rem' }}
                boxSizing="border-box"
                bg="#f5f5f5"
            >
                <Flex justify="space-between">
                    <Box>
                        <Text style={{ fontSize: "32px", fontWeight: 500 }}>John's Workspace</Text>
                        <Text>View and share threads onto your workspace</Text>
                    </Box>
                    <Box>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />
                            <Input
                                type="text"
                                placeholder="Search"
                                value={searchValue}
                                onChange={handleInputChange}
                                width="full"
                                bg="white"
                            />
                            {searchValue && (
                                <InputRightElement>
                                    <IconButton
                                        icon={<CloseIcon />}
                                        aria-label="Clear search"
                                        variant="ghost"
                                        color="gray.500"
                                        _hover={{ color: 'gray.600' }}
                                        onClick={clearSearch}
                                    />
                                </InputRightElement>
                            )}
                        </InputGroup>
                    </Box>
                </Flex>
                <Divider orientation="horizontal" color="black.900" my={10} />
                <Box my={10}>

                    <Text style={{ fontSize: "24px", fontWeight: 500 }} >
                        <ArrowUpIcon />
                        Popular
                    </Text>
                </Box>
                <Box
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: '16px',
                        marginBottom: '16px',
                        height: '30px,'
                    }}
                >
                </Box>
                <Box style={{
                    display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap',
                }}>
                    {populardata.map((item, index) => (
                        <Box
                            key={index}
                            style={{
                                marginBottom: '16px',
                            }}
                        >
                            <Text>Clear Energy Initiative</Text>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Card p={10}>
                                    <Text
                                        style={{
                                            width: '300px',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >{item}</Text>
                                </Card>
                            </Box>
                            <Text sx={textStyles}>con_Brain</Text>
                        </Box>
                    ))}
                </Box>

                <Divider orientation="horizontal" color="black.900" my={10} />
                <Flex justify="space-between" mb={5}>
                    <Box>
                        <Text style={{ fontSize: "32px", fontWeight: 500 }}><CalendarIcon /> Shared</Text>
                    </Box>
                    <Box>
                        <InputGroup>

                            <Input
                                type="date"
                                value={searchDate}
                                onChange={(e) => setSearchDate(e.target.value)}
                                placeholder="Date"
                                width="full"
                                bg="white"
                            />

                        </InputGroup>

                        {/* <div>{searchResult}</div> */}
                    </Box>
                </Flex>



                <TableContainer centerContent width="100%" >
                    <Table centerContent variant="striped" size="md" width="100%">
                        <Thead style={{ background: 'teal', color: '#fff' }}>
                            <Tr>
                                <Th>
                                    <Checkbox colorScheme="green" />
                                </Th>
                                <Th>User</Th>
                                <Th>Date Uploaded</Th>
                                <Th>Details</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((item) => (
                                <Tr key={item.id}>
                                    <Td>
                                        <Checkbox colorScheme="green" onChange={() => checkboxHandler(item.id)} />
                                    </Td>
                                    <Td>{item.username}</Td>
                                    <Td>{item.date}</Td>
                                    <Td>{item.description}</Td>
                                    <Td>
                                        {getStatusIcon(item.status)} {item.status} <Icon as={DeleteIcon} />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>

                <Divider orientation="horizontal" color="black.900" my={10} />
            </Box >
        </>
    );
};

export default WorkSpace;
