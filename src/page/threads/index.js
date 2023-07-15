import { Checkbox, Table, Tbody, Td, Text, Th, Thead, Tr, Icon, TableContainer } from '@chakra-ui/react';
import { Flex, Box, Input, InputGroup, InputLeftElement, InputRightElement, IconButton } from '@chakra-ui/react';
import { LockIcon, UnlockIcon, DeleteIcon, SearchIcon, CloseIcon, PlusSquareIcon, ArrowDownIcon, CalendarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Divider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const DataTable = () => {
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
                        <Text style={{ fontSize: "32px", fontWeight: 700 }}>Robert Thread's</Text>
                        <Text>Generate more threads or view your history</Text>
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
                <Button colorScheme='teal' size='lg'
                    padding={{ base: '1rem', md: '2rem', lg: '2.5rem' }}
                >
                    <Icon as={PlusSquareIcon} mx={5} />
                    New Thread
                </Button>
                <Divider orientation="horizontal" color="black.900" my={10} />
                <Flex justify="space-between" mb={5}>
                    <Box>
                        <Text style={{ fontSize: "32px", fontWeight: 700 }}><CalendarIcon /> Recently Added</Text>
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
                            {searchValue && (
                                <InputRightElement>
                                    <IconButton
                                        icon={<ArrowDownIcon />}
                                        aria-label="Clear search"
                                        variant="ghost"
                                        color="gray.500"
                                        _hover={{ color: 'gray.600' }}
                                        onClick={clearSearch}
                                    />
                                </InputRightElement>
                            )}
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
                                {/* Checkbox column */}
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

            </Box>
        </>
    );
};

export default DataTable;
