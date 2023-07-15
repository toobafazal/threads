import { Checkbox, Table, Tbody, Td, Text, Th, Thead, Tr, Icon, TableContainer } from '@chakra-ui/react';
import { Flex, Box, Input, InputGroup, InputLeftElement, InputRightElement, IconButton } from '@chakra-ui/react';
import { LockIcon, UnlockIcon, DeleteIcon, SearchIcon, CloseIcon, PlusSquareIcon, ArrowDownIcon, CalendarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Divider } from '@chakra-ui/react';
import { Button, HStack } from '@chakra-ui/react';

const Infobase = () => {
    const data = [

        // Add more data rows as needed
        {
            id: 1,
            doc_type: "planning",
            doc_name: "electric panel",
            sentiment: "Positive",
            organization: "LRP",
            date: "06/03/2023",
            privacy: "public",
            summary: "this report provide a competetive analysis",
            status: "pending"
        },
        {
            id: 2,
            doc_type: "planning",
            doc_name: "electric panel",
            sentiment: "Positive",
            organization: "LRP",
            date: "06/03/2023",
            privacy: "public",
            summary: "this report provide a competetive analysis",
            status: "pending"
        },
        {
            id: 3,
            doc_type: "planning",
            doc_name: "electric panel",
            sentiment: "Positive",
            organization: "LRP",
            date: "06/03/2023",
            privacy: "public",
            summary: "this report provide a competetive analysis",
            status: "pending"
        },
        {
            id: 4,
            doc_type: "planning",
            doc_name: "electric panel",
            sentiment: "Positive",
            organization: "LRP",
            date: "06/03/2023",
            privacy: "public",
            summary: "this report provide a competetive analysis",
            status: "pending"
        },
        {
            id: 5,
            doc_type: "planning",
            doc_name: "electric panel",
            sentiment: "Positive",
            organization: "LRP",
            date: "06/03/2023",
            privacy: "public",
            summary: "this report provide a competetive analysis",
            status: "pending"
        },
        {
            id: 6,
            doc_type: "planning",
            doc_name: "electric panel",
            sentiment: "Positive",
            organization: "LRP",
            date: "06/03/2023",
            privacy: "public",
            summary: "this report provide a competetive analysis",
            status: "pending"
        },
        {
            id: 7,
            doc_type: "planning",
            doc_name: "electric panel",
            sentiment: "Positive",
            organization: "LRP",
            date: "06/03/2023",
            privacy: "public",
            summary: "this report provide a competetive analysis",
            status: "pending"
        },
    ];
    const [searchValue, setSearchValue] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [rowCount, setRowCount] = useState(10); // Default value is 10
    const [currentPage, setCurrentPage] = useState(1);

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
        if (status === 'pending') {
            return <Icon as={LockIcon} color="green.500" />;
        } else {
            return <Icon as={UnlockIcon} color="red.500" />;
        }
    };
    const handleRowCountChange = (event) => {
        setRowCount(Number(event.target.value));
    };

    // Fetch data based on the selected rowCount
    const fetchData = () => {
        console.log(`Fetching data for ${rowCount} rows.`);
    };

    const totalPages = 10;
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <Button
                    key={i}
                    size="sm"
                    variant={i === currentPage ? "solid" : "outline"}
                    colorScheme={i === currentPage ? "teal" : "gray"}
                    onClick={() => handlePageChange(i)}
                    mx={1}
                >
                    {i}
                </Button>
            );
        }
        return pageNumbers;
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
                        <h1 style={{ fontSize: "32px", fontWeight: 700 }}>Brain Infobase</h1>
                        <p>upload document to save and re-use information</p>
                    </Box>

                </Flex>
                <Divider orientation="horizontal" color="black.900" my={10} />

                <Flex justify="space-between" mb={5}>
                    <Box>
                        Show
                        <select value={rowCount} onChange={handleRowCountChange} m={1}>
                            <option value={10}>10 rows</option>
                            <option value={20}>20 rows</option>
                            <option value={30}>30 rows</option>
                            {/* Add more options as needed */}
                        </select>
                        entries
                        {/* <button onClick={fetchData}>Fetch Data</button> */}
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
                                <Th>#</Th>
                                <Th>Doc Type</Th>
                                <Th>Doc Name</Th>
                                <Th>Sentiments</Th>
                                <Th>Organization</Th>
                                <Th>Date uploaded</Th>
                                <Th>Privacy</Th>
                                <Th>Doc Summary</Th>
                                <Th>Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((item) => (
                                <Tr key={item.id}>
                                    <Td>
                                        <Checkbox colorScheme="green" onChange={() => checkboxHandler(item.id)} />
                                    </Td>
                                    <Td>{item.id}</Td>
                                    <Td>{item.doc_type}</Td>
                                    <Td>{item.doc_name}</Td>
                                    <Td>{item.sentiment}</Td>
                                    <Td>{item.organization}</Td>
                                    <Td>{item.date}</Td>
                                    <Td>{item.privacy}</Td>
                                    <Td>{item.summary}</Td>

                                    <Td>
                                        {getStatusIcon(item.status)} {item.status}
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>


                </TableContainer>

                <Divider orientation="horizontal" color="black.900" my={10} />
                <Flex justify="center" mb={5}>
                <HStack spacing={2}>
                    <Button
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        isDisabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    {renderPageNumbers()}
                    <Button
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        isDisabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </HStack>
                </Flex>
            </Box>
        </>
    );
};

export default Infobase;
