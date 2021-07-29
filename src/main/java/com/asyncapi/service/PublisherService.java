package com.asyncapi.service;

import org.springframework.integration.annotation.Gateway;
import org.springframework.integration.annotation.MessagingGateway;

@MessagingGateway
public interface PublisherService {

    
        
    
    @Gateway(requestChannel = "subChatMessageOutboundChannel")
    void subChatMessage(String data);
        
    
}
